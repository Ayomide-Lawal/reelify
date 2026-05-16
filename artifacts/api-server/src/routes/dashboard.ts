import { Router, type IRouter } from "express";
import { db, profilesTable, projectsTable, exportRecordsTable } from "@workspace/db";
import { eq, desc, count, sql } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import { GetDashboardSummaryResponse } from "@workspace/api-zod";

const FREE_EXPORT_LIMIT = 3;

const router: IRouter = Router();

router.get("/dashboard/summary", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;

  const [
    [profile],
    [{ value: totalProjects }],
    [{ value: totalExports }],
    recentProjects,
    platformBreakdown,
  ] = await Promise.all([
    db.select().from(profilesTable).where(eq(profilesTable.id, userId)),
    db.select({ value: count() }).from(projectsTable).where(eq(projectsTable.userId, userId)),
    db.select({ value: count() }).from(exportRecordsTable).where(eq(exportRecordsTable.userId, userId)),
    db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.userId, userId))
      .orderBy(desc(projectsTable.createdAt))
      .limit(5),
    db
      .select({
        platform: exportRecordsTable.platform,
        count: count(),
      })
      .from(exportRecordsTable)
      .where(eq(exportRecordsTable.userId, userId))
      .groupBy(exportRecordsTable.platform),
  ]);

  const plan = profile?.plan ?? "free";

  res.json(GetDashboardSummaryResponse.parse({
    totalProjects: Number(totalProjects),
    totalExports: Number(totalExports),
    exportsUsedThisMonth: profile?.exportsUsedThisMonth ?? 0,
    exportLimit: plan === "free" ? FREE_EXPORT_LIMIT : null,
    plan,
    recentProjects: recentProjects.map((p) => ({
      id: p.id,
      userId: p.userId,
      title: p.title,
      originalFileName: p.originalFileName,
      originalFileSize: p.originalFileSize,
      originalDuration: p.originalDuration,
      targetPlatforms: p.targetPlatforms,
      status: p.status,
      processingProgress: p.processingProgress,
      processingMessage: p.processingMessage,
      errorMessage: p.errorMessage,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    })),
    platformBreakdown: platformBreakdown.map((pb) => ({
      platform: pb.platform,
      count: Number(pb.count),
    })),
  }));
});

export default router;
