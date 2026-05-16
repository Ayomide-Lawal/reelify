import { Router, type IRouter } from "express";
import { db, projectsTable, platformEditsTable } from "@workspace/db";
import { eq, and, desc, count } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import {
  CreateProjectBody,
  GetProjectParams,
  DeleteProjectParams,
  ListProjectsQueryParams,
  ListProjectsResponse,
  GetProjectResponse,
  DeleteProjectResponse,
} from "@workspace/api-zod";

const PLATFORM_ASPECT_RATIOS: Record<string, string> = {
  tiktok: "9:16",
  youtube_shorts: "9:16",
  instagram_reels: "9:16",
  youtube: "16:9",
};

const router: IRouter = Router();

router.get("/projects", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const query = ListProjectsQueryParams.safeParse(req.query);
  const limit = query.success ? (query.data.limit ?? 20) : 20;
  const offset = query.success ? (query.data.offset ?? 0) : 0;

  const [projects, [{ value: total }]] = await Promise.all([
    db
      .select()
      .from(projectsTable)
      .where(eq(projectsTable.userId, userId))
      .orderBy(desc(projectsTable.createdAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ value: count() })
      .from(projectsTable)
      .where(eq(projectsTable.userId, userId)),
  ]);

  res.json(ListProjectsResponse.parse({
    projects: projects.map((p) => ({
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
    total: Number(total),
  }));
});

router.post("/projects", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = CreateProjectBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const { title, originalVideoPath, originalFileName, originalFileSize, originalDuration, targetPlatforms } = parsed.data;

  const [project] = await db
    .insert(projectsTable)
    .values({
      userId,
      title,
      originalVideoPath,
      originalFileName,
      originalFileSize,
      originalDuration: originalDuration ?? null,
      targetPlatforms,
      status: "uploaded",
      processingProgress: 0,
    })
    .returning();

  await db.insert(platformEditsTable).values(
    targetPlatforms.map((platform) => ({
      projectId: project.id,
      userId,
      platform,
      aspectRatio: PLATFORM_ASPECT_RATIOS[platform] ?? "9:16",
      captionsEnabled: true,
      status: "pending" as const,
    }))
  );

  res.status(201).json({
    id: project.id,
    userId: project.userId,
    title: project.title,
    originalFileName: project.originalFileName,
    originalFileSize: project.originalFileSize,
    originalDuration: project.originalDuration,
    targetPlatforms: project.targetPlatforms,
    status: project.status,
    processingProgress: project.processingProgress,
    processingMessage: project.processingMessage,
    errorMessage: project.errorMessage,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  });
});

router.get("/projects/:projectId", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const rawId = Array.isArray(req.params.projectId) ? req.params.projectId[0] : req.params.projectId;
  const params = GetProjectParams.safeParse({ projectId: rawId });
  if (!params.success) {
    res.status(400).json({ error: "Invalid project ID" });
    return;
  }

  const [project] = await db
    .select()
    .from(projectsTable)
    .where(and(eq(projectsTable.id, params.data.projectId), eq(projectsTable.userId, userId)));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  const edits = await db
    .select()
    .from(platformEditsTable)
    .where(eq(platformEditsTable.projectId, project.id));

  res.json(GetProjectResponse.parse({
    id: project.id,
    userId: project.userId,
    title: project.title,
    originalFileName: project.originalFileName,
    originalFileSize: project.originalFileSize,
    originalDuration: project.originalDuration,
    targetPlatforms: project.targetPlatforms,
    status: project.status,
    processingProgress: project.processingProgress,
    processingMessage: project.processingMessage,
    errorMessage: project.errorMessage,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
    platformEdits: edits.map((e) => ({
      id: e.id,
      projectId: e.projectId,
      platform: e.platform,
      editedVideoPath: e.editedVideoPath,
      thumbnailPath: e.thumbnailPath,
      aspectRatio: e.aspectRatio,
      duration: e.duration,
      captionsEnabled: e.captionsEnabled,
      captionsData: e.captionsData,
      status: e.status,
      createdAt: e.createdAt,
    })),
  }));
});

router.delete("/projects/:projectId", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const rawId = Array.isArray(req.params.projectId) ? req.params.projectId[0] : req.params.projectId;
  const params = DeleteProjectParams.safeParse({ projectId: rawId });
  if (!params.success) {
    res.status(400).json({ error: "Invalid project ID" });
    return;
  }

  const [deleted] = await db
    .delete(projectsTable)
    .where(and(eq(projectsTable.id, params.data.projectId), eq(projectsTable.userId, userId)))
    .returning();

  if (!deleted) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  res.json(DeleteProjectResponse.parse({ success: true, message: "Project deleted" }));
});

export default router;
