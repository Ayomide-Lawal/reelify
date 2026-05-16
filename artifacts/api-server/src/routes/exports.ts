import { Router, type IRouter } from "express";
import { db, profilesTable, projectsTable, platformEditsTable, exportRecordsTable } from "@workspace/db";
import { eq, and, desc, count, inArray } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import {
  CreateExportBody,
  CreateExportResponse,
  ListExportsQueryParams,
  ListExportsResponse,
} from "@workspace/api-zod";
import path from "node:path";

const ASSETS_DIR = path.resolve(globalThis.__dirname ?? path.dirname(new URL(import.meta.url).pathname), "assets");

const VERTICAL_PLATFORMS = new Set(["tiktok", "youtube_shorts", "instagram_reels"]);
function getSampleMp4Path(platform: string): string {
  return path.join(ASSETS_DIR, VERTICAL_PLATFORMS.has(platform) ? "sample_vertical.mp4" : "sample_horizontal.mp4");
}

const FREE_EXPORT_LIMIT = 3;

const router: IRouter = Router();

router.get("/exports", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const query = ListExportsQueryParams.safeParse(req.query);
  const limit = query.success ? (query.data.limit ?? 20) : 20;
  const offset = query.success ? (query.data.offset ?? 0) : 0;

  const [exports_, [{ value: total }]] = await Promise.all([
    db
      .select({
        id: exportRecordsTable.id,
        projectId: exportRecordsTable.projectId,
        platformEditId: exportRecordsTable.platformEditId,
        platform: exportRecordsTable.platform,
        exportedAt: exportRecordsTable.exportedAt,
        projectTitle: projectsTable.title,
      })
      .from(exportRecordsTable)
      .leftJoin(projectsTable, eq(exportRecordsTable.projectId, projectsTable.id))
      .where(eq(exportRecordsTable.userId, userId))
      .orderBy(desc(exportRecordsTable.exportedAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ value: count() })
      .from(exportRecordsTable)
      .where(eq(exportRecordsTable.userId, userId)),
  ]);

  res.json(ListExportsResponse.parse({
    exports: exports_.map((e) => ({
      id: e.id,
      projectId: e.projectId,
      platformEditId: e.platformEditId,
      platform: e.platform,
      projectTitle: e.projectTitle,
      exportedAt: e.exportedAt,
    })),
    total: Number(total),
  }));
});

router.post("/exports/download", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = CreateExportBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const { projectId, platformEditIds } = parsed.data;

  const [profile] = await db
    .select()
    .from(profilesTable)
    .where(eq(profilesTable.id, userId));

  if (!profile) {
    res.status(401).json({ error: "User not found" });
    return;
  }

  const now = new Date();
  let updatedProfile = profile;
  if (profile.exportResetDate <= now) {
    const [reset] = await db
      .update(profilesTable)
      .set({
        exportsUsedThisMonth: 0,
        exportResetDate: new Date(now.getFullYear(), now.getMonth() + 1, 1),
        updatedAt: now,
      })
      .where(eq(profilesTable.id, userId))
      .returning();
    updatedProfile = reset ?? profile;
  }

  const [project] = await db
    .select()
    .from(projectsTable)
    .where(and(eq(projectsTable.id, projectId), eq(projectsTable.userId, userId)));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  const edits = await db
    .select()
    .from(platformEditsTable)
    .where(
      and(
        inArray(platformEditsTable.id, platformEditIds),
        eq(platformEditsTable.userId, userId)
      )
    );

  if (edits.length === 0) {
    res.status(404).json({ error: "No platform edits found" });
    return;
  }

  if (updatedProfile.plan === "free") {
    const remaining = FREE_EXPORT_LIMIT - updatedProfile.exportsUsedThisMonth;
    if (remaining <= 0 || edits.length > remaining) {
      res.status(403).json({
        error: "Export limit reached",
        message: remaining <= 0
          ? `Free plan allows ${FREE_EXPORT_LIMIT} exports per month. Upgrade to Pro for unlimited exports.`
          : `Only ${remaining} export${remaining === 1 ? "" : "s"} remaining this month. Select fewer videos or upgrade to Pro.`,
      });
      return;
    }
  }

  await db.insert(exportRecordsTable).values(
    edits.map((edit) => ({
      userId,
      projectId,
      platformEditId: edit.id,
      platform: edit.platform,
    }))
  );

  await db
    .update(profilesTable)
    .set({
      exportsUsedThisMonth: updatedProfile.exportsUsedThisMonth + edits.length,
      updatedAt: now,
    })
    .where(eq(profilesTable.id, userId));

  const [updatedProfile2] = await db
    .select()
    .from(profilesTable)
    .where(eq(profilesTable.id, userId));

  const exportsUsed = updatedProfile2?.exportsUsedThisMonth ?? updatedProfile.exportsUsedThisMonth + edits.length;
  const exportsRemaining = updatedProfile.plan === "free" ? Math.max(0, FREE_EXPORT_LIMIT - exportsUsed) : null;

  const downloads = edits.map((edit) => ({
    platformEditId: edit.id,
    platform: edit.platform,
    downloadUrl: edit.editedVideoPath
      ? `/api/exports/file/${edit.id}`
      : `/api/exports/mock/${edit.platform}`,
    fileName: `${project.title.replace(/\s+/g, "_")}_${edit.platform}.mp4`,
  }));

  res.json(CreateExportResponse.parse({
    downloads,
    exportsUsed,
    exportsRemaining,
  }));
});

router.get("/exports/file/:editId", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const editId = Array.isArray(req.params.editId) ? req.params.editId[0] : req.params.editId;

  const [edit] = await db
    .select()
    .from(platformEditsTable)
    .where(
      and(
        eq(platformEditsTable.id, editId),
        eq(platformEditsTable.userId, userId)
      )
    );

  if (!edit) {
    res.status(404).json({ error: "Platform edit not found" });
    return;
  }

  if (edit.status !== "ready") {
    res.status(409).json({ error: "Video is not ready for download yet" });
    return;
  }

  const fileName = `${edit.platform}_video.mp4`;
  const filePath = getSampleMp4Path(edit.platform);
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.sendFile(filePath);
});

router.get("/exports/mock/:platform", async (req, res): Promise<void> => {
  const { platform } = req.params;
  const filePath = getSampleMp4Path(platform);
  res.setHeader("Content-Disposition", `attachment; filename="${platform}_sample.mp4"`);
  res.sendFile(filePath);
});

export default router;
