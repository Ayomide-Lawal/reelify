import { Router, type IRouter } from "express";
import { db, profilesTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import { GetProfileResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/auth/profile", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;

  const [profile] = await db
    .select()
    .from(profilesTable)
    .where(eq(profilesTable.id, userId));

  if (!profile) {
    res.status(404).json({ error: "Profile not found" });
    return;
  }

  res.json(GetProfileResponse.parse({
    id: profile.id,
    email: profile.email,
    fullName: profile.fullName,
    avatarUrl: profile.avatarUrl,
    plan: profile.plan,
    exportsUsedThisMonth: profile.exportsUsedThisMonth,
    exportResetDate: profile.exportResetDate,
    createdAt: profile.createdAt,
  }));
});

export default router;
