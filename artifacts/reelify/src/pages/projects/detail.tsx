import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation, useParams } from "wouter";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { getAuthHeaders } from "@/lib/api";
import type { ProjectWithEdits, PlatformEdit, ExportDownloadResponseDownloadsItem } from "@/lib/types";
import { ArrowLeft, Download, Trash2, Loader2, CheckCircle2, XCircle, Clock, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BASE_URL = import.meta.env.BASE_URL;
function getApiUrl(path: string) { return `${BASE_URL}api${path}`; }

function StatusBanner({ project }: { project: ProjectWithEdits }) {
  if (project.status === "ready") {
    return (
      <div className="flex items-center gap-2 p-3 bg-green-900/20 border border-green-800/50 rounded-lg">
        <CheckCircle2 size={16} className="text-green-400" />
        <span className="text-sm text-green-300">{project.processingMessage ?? "Your videos are ready!"}</span>
      </div>
    );
  }
  if (project.status === "failed") {
    return (
      <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-800/50 rounded-lg">
        <XCircle size={16} className="text-red-400" />
        <span className="text-sm text-red-300">{project.errorMessage ?? "Processing failed"}</span>
      </div>
    );
  }
  if (project.status === "processing") {
    return (
      <div className="p-4 bg-yellow-900/10 border border-yellow-800/30 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Loader2 size={14} className="animate-spin text-yellow-400" />
          <span className="text-sm font-medium text-yellow-300">{project.processingMessage ?? "Processing your video..."}</span>
          <span className="text-xs text-yellow-400/70 ml-auto">{project.processingProgress ?? 0}%</span>
        </div>
        <div className="h-1.5 bg-yellow-900/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-yellow-500 rounded-full transition-all duration-500"
            style={{ width: `${project.processingProgress ?? 0}%` }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 p-3 bg-blue-900/20 border border-blue-800/50 rounded-lg">
      <Clock size={16} className="text-blue-400" />
      <span className="text-sm text-blue-300">Video uploaded. Processing will begin shortly.</span>
    </div>
  );
}

async function triggerDownload(downloadUrl: string, fileName: string) {
  const url = `${BASE_URL}api${downloadUrl.replace(/^\/api/, "")}`;
  const res = await fetch(url, { headers: getAuthHeaders() });
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(objectUrl);
}

export default function ProjectDetailPage() {
  const params = useParams<{ projectId: string }>();
  const { projectId } = params;
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: project, isLoading } = useQuery<ProjectWithEdits>({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const res = await fetch(getApiUrl(`/projects/${projectId}`), { headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Project not found");
      return res.json() as Promise<ProjectWithEdits>;
    },
    refetchInterval: (query) => {
      const data = query.state.data;
      if (data?.status === "processing" || data?.status === "uploaded") return 2000;
      return false;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(getApiUrl(`/projects/${projectId}`), {
        method: "DELETE",
        headers: getAuthHeaders(),
      });
      if (!res.ok) throw new Error("Failed to delete project");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigate("/projects");
    },
    onError: () => {
      toast({ title: "Error", description: "Could not delete project", variant: "destructive" });
    },
  });

  const exportMutation = useMutation({
    mutationFn: async (editId: string) => {
      const res = await fetch(getApiUrl("/exports/download"), {
        method: "POST",
        headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, platformEditIds: [editId] }),
      });
      const data = await res.json() as { downloads?: ExportDownloadResponseDownloadsItem[]; error?: string; message?: string };
      if (!res.ok) throw new Error(data.message ?? "Export failed");
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["dashboard-summary"] });
      const download = data.downloads?.[0];
      if (download?.downloadUrl && download.fileName) {
        void triggerDownload(download.downloadUrl, download.fileName)
          .then(() => {
            toast({ title: "Download started", description: `Downloading ${download.platform} version` });
          })
          .catch(() => {
            toast({ title: "Download failed", description: "Could not download the file", variant: "destructive" });
          });
      }
    },
    onError: (err: Error) => {
      if (err.message.includes("Export limit") || err.message.includes("exports remaining")) {
        toast({
          title: "Export limit reached",
          description: err.message + " — visit Settings to upgrade to Pro.",
          variant: "destructive",
        });
      } else {
        toast({ title: "Export failed", description: err.message, variant: "destructive" });
      }
    },
  });

  const handleExportAll = () => {
    const readyEdits = project?.platformEdits?.filter((e: PlatformEdit) => e.status === "ready") ?? [];
    if (!readyEdits.length) return;

    void fetch(getApiUrl("/exports/download"), {
      method: "POST",
      headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, platformEditIds: readyEdits.map((e: PlatformEdit) => e.id) }),
    })
      .then((res) => res.json() as Promise<{ downloads?: ExportDownloadResponseDownloadsItem[]; error?: string; message?: string }>)
      .then((data) => {
        if (data.error) {
          const isLimitError = data.error === "Export limit reached";
          toast({
            title: isLimitError ? "Export limit reached" : "Export failed",
            description: isLimitError ? (data.message ?? "") + " — visit Settings to upgrade to Pro." : data.message,
            variant: "destructive",
          });
        } else {
          queryClient.invalidateQueries({ queryKey: ["dashboard-summary"] });
          const count = data.downloads?.length ?? 0;
          toast({ title: "Downloads starting", description: `${count} video${count !== 1 ? "s" : ""} ready` });
          (data.downloads ?? []).forEach((dl: ExportDownloadResponseDownloadsItem, i: number) => {
            if (dl.downloadUrl && dl.fileName) {
              setTimeout(() => {
                void triggerDownload(dl.downloadUrl, dl.fileName).catch(() => {
                  toast({ title: "Download failed", description: `Could not download ${dl.platform} version`, variant: "destructive" });
                });
              }, i * 600);
            }
          });
        }
      });
  };

  if (isLoading) {
    return (
      <AppShell>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 size={32} className="animate-spin text-muted-foreground" />
        </div>
      </AppShell>
    );
  }

  if (!project) {
    return (
      <AppShell>
        <div className="p-8 text-center">
          <p className="text-muted-foreground">Project not found.</p>
          <Button className="mt-4" onClick={() => navigate("/projects")}>Back to projects</Button>
        </div>
      </AppShell>
    );
  }

  const readyEdits = project.platformEdits?.filter((e: PlatformEdit) => e.status === "ready") ?? [];

  return (
    <AppShell>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate("/projects")} className="h-8 w-8">
            <ArrowLeft size={16} />
          </Button>
          <h1 className="text-2xl font-bold flex-1 truncate">{project.title}</h1>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5 text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={() => {
              if (confirm("Delete this project?")) deleteMutation.mutate();
            }}
            disabled={deleteMutation.isPending}
          >
            <Trash2 size={14} /> Delete
          </Button>
        </div>

        <StatusBanner project={project} />

        <div className="mt-6 bg-card border border-border rounded-xl p-5 text-sm">
          <div className="grid grid-cols-2 gap-3 text-muted-foreground">
            <div><span className="text-foreground font-medium">File:</span> {project.originalFileName}</div>
            <div><span className="text-foreground font-medium">Size:</span> {project.originalFileSize ? `${(project.originalFileSize / 1024 / 1024).toFixed(1)} MB` : "—"}</div>
            <div><span className="text-foreground font-medium">Created:</span> {new Date(project.createdAt).toLocaleDateString()}</div>
            <div>
              <span className="text-foreground font-medium">Platforms: </span>
              <span className="inline-flex gap-1 ml-1">
                {project.targetPlatforms?.map((p: string) => <PlatformBadge key={p} platform={p} />)}
              </span>
            </div>
          </div>
        </div>

        {project.platformEdits?.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Platform Versions</h2>
              {readyEdits.length > 1 && (
                <Button size="sm" className="gap-1.5" onClick={handleExportAll}>
                  <Download size={14} /> Export All ({readyEdits.length})
                </Button>
              )}
            </div>

            <div className="grid gap-3">
              {project.platformEdits.map((edit: PlatformEdit) => (
                <div key={edit.id} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    {edit.status === "ready" ? (
                      <Play size={20} className="text-primary" />
                    ) : edit.status === "processing" ? (
                      <Loader2 size={20} className="animate-spin text-yellow-400" />
                    ) : (
                      <Clock size={20} className="text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <PlatformBadge platform={edit.platform} />
                      {edit.aspectRatio && (
                        <span className="text-xs text-muted-foreground font-mono">{edit.aspectRatio}</span>
                      )}
                      {edit.duration != null && (
                        <span className="text-xs text-muted-foreground">{Math.round(edit.duration)}s</span>
                      )}
                    </div>
                    {edit.captionsEnabled && edit.captionsData && edit.captionsData.length > 0 && (
                      <p className="text-xs text-muted-foreground truncate">
                        Captions: &quot;{edit.captionsData[0].text}...&quot;
                      </p>
                    )}
                  </div>
                  {edit.status === "ready" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 flex-shrink-0"
                      disabled={exportMutation.isPending}
                      onClick={() => exportMutation.mutate(edit.id)}
                    >
                      <Download size={14} /> Export
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}
