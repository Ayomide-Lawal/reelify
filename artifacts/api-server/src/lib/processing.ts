import { db, projectsTable, platformEditsTable } from "@workspace/db";
import { eq } from "drizzle-orm";
import { logger } from "./logger";

const PLATFORM_RULES: Record<string, {
  aspectRatio: string;
  maxDuration: number;
  pacing: string;
  captionStyle: string;
}> = {
  tiktok: {
    aspectRatio: "9:16",
    maxDuration: 60,
    pacing: "fast",
    captionStyle: "bold-animated",
  },
  youtube_shorts: {
    aspectRatio: "9:16",
    maxDuration: 60,
    pacing: "moderate",
    captionStyle: "clean",
  },
  instagram_reels: {
    aspectRatio: "9:16",
    maxDuration: 90,
    pacing: "moderate",
    captionStyle: "aesthetic",
  },
  youtube: {
    aspectRatio: "16:9",
    maxDuration: 600,
    pacing: "natural",
    captionStyle: "subtitle",
  },
};

const MOCK_CAPTION_DATA = [
  { text: "Check this out", startTime: 0.0, endTime: 1.5 },
  { text: "This is going to change", startTime: 1.5, endTime: 3.0 },
  { text: "the way you create content", startTime: 3.0, endTime: 5.0 },
  { text: "for every platform", startTime: 5.0, endTime: 7.0 },
];

async function updateProgress(projectId: string, progress: number, message: string): Promise<void> {
  await db
    .update(projectsTable)
    .set({ processingProgress: progress, processingMessage: message, updatedAt: new Date() })
    .where(eq(projectsTable.id, projectId));
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function processProject(projectId: string, userId: string): Promise<void> {
  logger.info({ projectId }, "Starting video processing");

  try {
    await db
      .update(projectsTable)
      .set({ status: "processing", processingProgress: 0, processingMessage: "Analyzing your video...", updatedAt: new Date() })
      .where(eq(projectsTable.id, projectId));

    await sleep(1500);
    await updateProgress(projectId, 15, "Detecting key moments...");

    await sleep(1500);
    await updateProgress(projectId, 30, "Optimizing pacing and cuts...");

    const edits = await db
      .select()
      .from(platformEditsTable)
      .where(eq(platformEditsTable.projectId, projectId));

    const platformMessages: Record<string, string> = {
      tiktok: "Creating TikTok version (9:16, bold captions)...",
      youtube_shorts: "Creating YouTube Shorts version (9:16, clean captions)...",
      instagram_reels: "Creating Instagram Reels version (9:16, aesthetic captions)...",
      youtube: "Creating YouTube version (16:9, full quality)...",
    };

    let progressStep = 30;
    const progressPerPlatform = Math.floor(50 / Math.max(edits.length, 1));

    for (const edit of edits) {
      const rules = PLATFORM_RULES[edit.platform] ?? PLATFORM_RULES.tiktok;
      const message = platformMessages[edit.platform] ?? `Processing ${edit.platform}...`;

      await db
        .update(platformEditsTable)
        .set({ status: "processing" })
        .where(eq(platformEditsTable.id, edit.id));

      await updateProgress(projectId, progressStep, message);
      await sleep(2000);

      progressStep += progressPerPlatform;

      const mockVideoPath = `mock/${userId}/${projectId}/${edit.platform}.mp4`;

      await db
        .update(platformEditsTable)
        .set({
          status: "ready",
          editedVideoPath: mockVideoPath,
          aspectRatio: rules.aspectRatio,
          duration: Math.min(30, rules.maxDuration),
          captionsEnabled: true,
          captionsData: MOCK_CAPTION_DATA,
        })
        .where(eq(platformEditsTable.id, edit.id));
    }

    await updateProgress(projectId, 85, "Adding captions...");
    await sleep(1000);

    await updateProgress(projectId, 95, "Finalizing exports...");
    await sleep(1000);

    await db
      .update(projectsTable)
      .set({
        status: "ready",
        processingProgress: 100,
        processingMessage: "Your videos are ready to preview and export!",
        updatedAt: new Date(),
      })
      .where(eq(projectsTable.id, projectId));

    logger.info({ projectId }, "Video processing completed successfully");
  } catch (err) {
    logger.error({ err, projectId }, "Video processing failed");

    await db
      .update(projectsTable)
      .set({
        status: "failed",
        errorMessage: err instanceof Error ? err.message : "Processing failed. Please try again.",
        updatedAt: new Date(),
      })
      .where(eq(projectsTable.id, projectId));
  }
}
