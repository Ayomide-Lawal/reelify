import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { getAuthHeaders } from "@/lib/api";
import type { Project } from "@/lib/types";
import { Plus, FolderOpen, Loader2, Film } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
function getApiUrl(path: string) { return `${BASE_URL}api${path}`; }

const STATUS_STYLES: Record<string, string> = {
  uploaded: "text-blue-400 bg-blue-900/30 border-blue-800",
  processing: "text-yellow-400 bg-yellow-900/30 border-yellow-800",
  ready: "text-green-400 bg-green-900/30 border-green-800",
  failed: "text-red-400 bg-red-900/30 border-red-800",
};

const STATUS_LABELS: Record<string, string> = {
  uploaded: "Uploaded",
  processing: "Processing...",
  ready: "Ready",
  failed: "Failed",
};

function formatDuration(seconds?: number | null): string {
  if (!seconds) return "";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatSize(bytes?: number | null): string {
  if (!bytes) return "";
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

export default function ProjectsPage() {
  const [, navigate] = useLocation();

  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch(getApiUrl("/projects"), { headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Failed to load projects");
      return res.json();
    },
  });

  return (
    <AppShell>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">My Projects</h1>
            <p className="text-muted-foreground text-sm mt-0.5">
              {data?.total != null ? `${data.total} project${data.total !== 1 ? "s" : ""}` : "All your video projects"}
            </p>
          </div>
          <Button onClick={() => navigate("/upload")} className="gap-2">
            <Plus size={16} /> New Project
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={28} className="animate-spin text-muted-foreground" />
          </div>
        ) : !data?.projects?.length ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FolderOpen size={48} className="text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-medium text-lg">No projects yet</p>
            <p className="text-muted-foreground/60 text-sm mt-1 mb-6">Upload your first video to get started</p>
            <Button onClick={() => navigate("/upload")} className="gap-2">
              <Plus size={16} /> Upload a video
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {data.projects.map((project: Project) => (
              <div
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="bg-card border border-border rounded-xl p-5 cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <Film size={20} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-semibold truncate">{project.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {project.originalFileName}
                          {project.originalFileSize ? ` · ${formatSize(project.originalFileSize)}` : ""}
                          {project.originalDuration ? ` · ${formatDuration(project.originalDuration)}` : ""}
                        </p>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-full border flex-shrink-0 ${STATUS_STYLES[project.status] ?? STATUS_STYLES.uploaded}`}>
                        {STATUS_LABELS[project.status] ?? project.status}
                      </span>
                    </div>

                    {project.status === "processing" && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-muted-foreground">{project.processingMessage ?? "Processing..."}</span>
                          <span className="text-xs text-muted-foreground">{project.processingProgress ?? 0}%</span>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${project.processingProgress ?? 0}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.targetPlatforms?.map((p: string) => (
                        <PlatformBadge key={p} platform={p} />
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground mt-2">
                      Created {new Date(project.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
