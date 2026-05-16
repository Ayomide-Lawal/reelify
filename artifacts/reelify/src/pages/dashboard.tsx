import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { getAuthHeaders } from "@/lib/api";
import type { Project, DashboardSummary } from "@/lib/types";
import { Plus, FolderOpen, Download, TrendingUp, Crown, Loader2 } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

function getApiUrl(path: string) {
  return `${BASE_URL}api${path}`;
}

const STATUS_STYLES: Record<string, string> = {
  uploaded: "text-blue-400 bg-blue-900/30 border-blue-800",
  processing: "text-yellow-400 bg-yellow-900/30 border-yellow-800",
  ready: "text-green-400 bg-green-900/30 border-green-800",
  failed: "text-red-400 bg-red-900/30 border-red-800",
};

export default function DashboardPage() {
  const [, navigate] = useLocation();

  const { data, isLoading } = useQuery<DashboardSummary>({
    queryKey: ["dashboard-summary"],
    queryFn: async () => {
      const res = await fetch(getApiUrl("/dashboard/summary"), { headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Failed to load dashboard");
      return res.json() as Promise<DashboardSummary>;
    },
  });

  const exportsLeft = data?.plan === "free" && data?.exportLimit != null
    ? Math.max(0, data.exportLimit - (data.exportsUsedThisMonth ?? 0))
    : null;

  return (
    <AppShell>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Manage your video projects</p>
          </div>
          <Button onClick={() => navigate("/upload")} className="gap-2">
            <Plus size={16} /> New Project
          </Button>
        </div>

        {data?.plan === "free" && exportsLeft !== null && exportsLeft <= 1 && (
          <div className="mb-6 bg-yellow-900/20 border border-yellow-800/50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown size={18} className="text-yellow-400" />
              <div>
                <p className="text-sm font-medium text-yellow-300">
                  {exportsLeft === 0 ? "You've used all your free exports this month" : `Only ${exportsLeft} free export${exportsLeft === 1 ? "" : "s"} remaining`}
                </p>
                <p className="text-xs text-yellow-400/70">Upgrade to Pro for unlimited exports</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="border-yellow-700 text-yellow-400 hover:bg-yellow-900/30" onClick={() => navigate("/pricing")}>
              Upgrade
            </Button>
          </div>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Total Projects", value: isLoading ? "—" : data?.totalProjects ?? 0, icon: FolderOpen, color: "text-primary" },
            { label: "Total Exports", value: isLoading ? "—" : data?.totalExports ?? 0, icon: Download, color: "text-green-400" },
            { label: "Exports This Month", value: isLoading ? "—" : `${data?.exportsUsedThisMonth ?? 0}${data?.exportLimit ? `/${data.exportLimit}` : ""}`, icon: TrendingUp, color: "text-accent" },
          ].map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <Icon size={16} className={color} />
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl">
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="font-semibold">Recent Projects</h2>
            <Button variant="ghost" size="sm" onClick={() => navigate("/projects")}>View all</Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 size={24} className="animate-spin text-muted-foreground" />
            </div>
          ) : !data?.recentProjects?.length ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <FolderOpen size={40} className="text-muted-foreground/40 mb-4" />
              <p className="text-muted-foreground font-medium">No projects yet</p>
              <p className="text-muted-foreground/60 text-sm mt-1">Upload your first video to get started</p>
              <Button className="mt-5 gap-2" onClick={() => navigate("/upload")}>
                <Plus size={16} /> Upload a video
              </Button>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {data.recentProjects.map((project: Project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-4 p-5 hover:bg-muted/20 cursor-pointer transition-colors"
                  onClick={() => navigate(`/projects/${project.id}`)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{project.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {project.originalFileName} · {new Date(project.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {project.targetPlatforms?.slice(0, 2).map((p: string) => (
                      <PlatformBadge key={p} platform={p} />
                    ))}
                    {project.targetPlatforms?.length > 2 && (
                      <span className="text-xs text-muted-foreground">+{project.targetPlatforms.length - 2}</span>
                    )}
                  </div>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[project.status] ?? STATUS_STYLES.uploaded}`}>
                    {project.status === "ready" ? "Ready" : project.status === "processing" ? "Processing..." : project.status === "failed" ? "Failed" : "Uploaded"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
