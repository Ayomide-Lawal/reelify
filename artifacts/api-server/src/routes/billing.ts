import { Router, type IRouter } from "express";
import { db, profilesTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import {
  CreateCheckoutSessionBody,
  CreateCheckoutSessionResponse,
  CreateBillingPortalSessionBody,
  CreateBillingPortalSessionResponse,
  HandleStripeWebhookResponse,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

router.post("/billing/checkout", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = CreateCheckoutSessionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const stripePriceId = process.env.STRIPE_PRO_PRICE_ID;

  if (!stripeSecretKey || !stripePriceId) {
    res.json(CreateCheckoutSessionResponse.parse({
      url: `${parsed.data.successUrl}?mock_checkout=true&plan=pro&user=${userId}`,
    }));
    return;
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeSecretKey);

    const [profile] = await db
      .select()
      .from(profilesTable)
      .where(eq(profilesTable.id, userId));

    let customerId = profile?.stripeCustomerId;

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: profile?.email ?? req.userEmail,
        metadata: { userId },
      });
      customerId = customer.id;
      await db
        .update(profilesTable)
        .set({ stripeCustomerId: customerId, updatedAt: new Date() })
        .where(eq(profilesTable.id, userId));
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [{ price: stripePriceId, quantity: 1 }],
      mode: "subscription",
      success_url: parsed.data.successUrl,
      cancel_url: parsed.data.cancelUrl,
      metadata: { userId },
    });

    res.json(CreateCheckoutSessionResponse.parse({ url: session.url ?? parsed.data.cancelUrl }));
  } catch (err) {
    req.log.error({ err }, "Stripe checkout error");
    res.status(500).json({ error: "Payment setup failed. Please try again." });
  }
});

router.post("/billing/portal", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = CreateBillingPortalSessionBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    res.json(CreateBillingPortalSessionResponse.parse({ url: parsed.data.returnUrl }));
    return;
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeSecretKey);

    const [profile] = await db
      .select()
      .from(profilesTable)
      .where(eq(profilesTable.id, userId));

    if (!profile?.stripeCustomerId) {
      res.status(400).json({ error: "No billing account found. Please upgrade first." });
      return;
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripeCustomerId,
      return_url: parsed.data.returnUrl,
    });

    res.json(CreateBillingPortalSessionResponse.parse({ url: session.url }));
  } catch (err) {
    req.log.error({ err }, "Stripe portal error");
    res.status(500).json({ error: "Could not open billing portal. Please try again." });
  }
});

router.post("/billing/webhook", async (req, res): Promise<void> => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    res.json(HandleStripeWebhookResponse.parse({ success: true, message: "Webhook received (no Stripe configured)" }));
    return;
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeSecretKey);
    const sig = req.headers["stripe-signature"] as string;

    let event: import("stripe").Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        webhookSecret
      );
    } catch (err) {
      req.log.warn({ err }, "Stripe webhook signature verification failed");
      res.status(400).json({ error: "Invalid signature" });
      return;
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as import("stripe").Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const subscriptionId = typeof session.subscription === "string" ? session.subscription : session.subscription?.id;

      if (userId) {
        await db
          .update(profilesTable)
          .set({
            plan: "pro",
            stripeSubscriptionId: subscriptionId ?? null,
            updatedAt: new Date(),
          })
          .where(eq(profilesTable.id, userId));

        logger.info({ userId }, "User upgraded to Pro");
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const subscription = event.data.object as import("stripe").Stripe.Subscription;
      const [profile] = await db
        .select()
        .from(profilesTable)
        .where(eq(profilesTable.stripeSubscriptionId, subscription.id));

      if (profile) {
        await db
          .update(profilesTable)
          .set({ plan: "free", stripeSubscriptionId: null, updatedAt: new Date() })
          .where(eq(profilesTable.id, profile.id));

        logger.info({ userId: profile.id }, "User downgraded to Free (subscription cancelled)");
      }
    }

    res.json(HandleStripeWebhookResponse.parse({ success: true, message: "Webhook processed" }));
  } catch (err) {
    req.log.error({ err }, "Stripe webhook processing error");
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

export default router;
