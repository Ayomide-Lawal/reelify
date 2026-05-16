export type ProjectStatus = "uploaded" | "processing" | "ready" | "failed";
export type PlatformEditStatus = "pending" | "processing" | "ready" | "failed";
export type Platform = "tiktok" | "youtube_shorts" | "instagram_reels" | "youtube";
export type Plan = "free" | "pro";

export interface Project {
  id: string;
  userId: string;
  title: string;
  originalFileName: string;
  originalFileSize: number;
  originalDuration?: number | null;
  targetPlatforms: Platform[];
  status: ProjectStatus;
  processingProgress?: number | null;
  processingMessage?: string | null;
  errorMessage?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PlatformEdit {
  id: string;
  projectId: string;
  platform: Platform;
  editedVideoPath?: string | null;
  thumbnailPath?: string | null;
  aspectRatio: string;
  duration?: number | null;
  captionsEnabled: boolean;
  status: PlatformEditStatus;
  captionsData?: Array<{ text: string; startTime: number; endTime: number }> | null;
  createdAt: string;
}

export interface ProjectWithEdits extends Project {
  platformEdits: PlatformEdit[];
}

export interface ExportRecord {
  id: string;
  projectId: string;
  platformEditId: string;
  platform: Platform;
  projectTitle?: string | null;
  exportedAt: string;
}

export interface DashboardSummaryPlatformBreakdownItem {
  platform: Platform;
  count: number;
}

export interface DashboardSummary {
  totalProjects: number;
  totalExports: number;
  exportsUsedThisMonth: number;
  exportLimit?: number | null;
  plan: Plan;
  recentProjects: Project[];
  platformBreakdown: DashboardSummaryPlatformBreakdownItem[];
}

export interface ExportDownloadResponseDownloadsItem {
  editId: string;
  platform: Platform;
  downloadUrl: string;
  fileName: string;
}

export interface ExportDownloadResponse {
  downloads: ExportDownloadResponseDownloadsItem[];
}
