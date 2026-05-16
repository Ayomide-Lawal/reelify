import { Router, type IRouter } from "express";
import { db, projectsTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { requireAuth, type AuthenticatedRequest } from "../lib/auth";
import { processProject } from "../lib/processing";
import {
  StartProcessingBody,
  StartProcessingResponse,
  GetUploadUrlBody,
  GetUploadUrlResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/processing/start", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = StartProcessingBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const { projectId } = parsed.data;

  const [project] = await db
    .select()
    .from(projectsTable)
    .where(and(eq(projectsTable.id, projectId), eq(projectsTable.userId, userId)));

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  if (project.status === "processing") {
    res.json(StartProcessingResponse.parse({ success: true, message: "Processing already in progress" }));
    return;
  }

  processProject(projectId, userId).catch((err) => {
    req.log.error({ err, projectId }, "Background processing error");
  });

  res.json(StartProcessingResponse.parse({ success: true, message: "Processing started" }));
});

router.post("/processing/upload-url", requireAuth, async (req: AuthenticatedRequest, res): Promise<void> => {
  const userId = req.userId!;
  const parsed = GetUploadUrlBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body", message: parsed.error.message });
    return;
  }

  const { fileName, fileType, projectId } = parsed.data;
  const storagePath = `${userId}/${projectId}/${fileName}`;

  res.json(GetUploadUrlResponse.parse({
    uploadUrl: `/api/processing/upload-stub`,
    storagePath,
  }));
});

export default router;
