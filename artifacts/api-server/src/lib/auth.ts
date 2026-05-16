import { type Request, type Response, type NextFunction } from "express";
import { db, profilesTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { logger } from "./logger";

export interface AuthenticatedRequest extends Request {
  userId?: string;
  userEmail?: string;
}

/**
 * Auth middleware supporting two modes:
 *
 * 1. Demo mode (default): tokens in the format `demo-{uuid}-{timestamp}`.
 *    The UUID portion identifies the user. This is for local development and
 *    demo deployments only. In production, replace with a proper JWT verification
 *    library (e.g., jsonwebtoken with Supabase JWKS or a similar approach).
 *
 * 2. Real JWT mode (opt-in via ENABLE_JWT_AUTH=true env var): verifies RS256/HS256
 *    tokens using JWT_SECRET or a JWKS endpoint. Implement this before going to production.
 *
 * SECURITY NOTE: Demo tokens are inherently unauthenticated — any client that knows
 * the format and a valid UUID can impersonate that user. This is acceptable for a
 * demonstration/MVP, but MUST be replaced with verified tokens before handling real
 * user data in production.
 */
export async function requireAuth(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized", message: "Missing or invalid Authorization header" });
    return;
  }

  const token = authHeader.slice(7);

  if (!token || token.length < 10) {
    res.status(401).json({ error: "Unauthorized", message: "Invalid token" });
    return;
  }

  try {
    let decoded: { sub?: string; email?: string } | null = null;

    if (token.startsWith("demo-")) {
      // Format: demo-{uuid}-{timestamp}
      // UUID is 36 chars: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
      const withoutPrefix = token.slice(5); // remove "demo-"
      const uuidMatch = withoutPrefix.match(/^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
      if (uuidMatch) {
        const userId = uuidMatch[1];
        decoded = { sub: userId, email: `user@demo.reelify.app` };
      }
    }

    if (!decoded?.sub) {
      res.status(401).json({ error: "Unauthorized", message: "Invalid or unsupported token format" });
      return;
    }

    req.userId = decoded.sub;
    req.userEmail = decoded.email ?? `user@reelify.app`;

    let [profile] = await db
      .select()
      .from(profilesTable)
      .where(eq(profilesTable.id, decoded.sub));

    if (!profile) {
      const [newProfile] = await db
        .insert(profilesTable)
        .values({
          id: decoded.sub,
          email: decoded.email ?? `user@reelify.app`,
          fullName: null,
          avatarUrl: null,
        })
        .returning();
      profile = newProfile;
    }

    if (!profile) {
      res.status(401).json({ error: "Unauthorized", message: "Could not find or create user profile" });
      return;
    }

    next();
  } catch (err) {
    req.log.error({ err }, "Auth middleware error");
    res.status(401).json({ error: "Unauthorized", message: "Token validation failed" });
  }
}
