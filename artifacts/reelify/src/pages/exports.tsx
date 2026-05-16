import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { PlatformBadge } from "@/components/ui/platform-badge";
import { getAuthHeaders } from "@/lib/api";
import type { ExportRecord } from "@/lib/types";
import { Download, Loader2, FileVideo } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
function getApiUrl(path: string) { return `${BASE_URL}api${path}`; }

type ListExports200 = { exports: ExportRecord[]; total: number };

export default function ExportsPage() {
  const [, navigate] = useLocation();

  const { data, isLoading } = useQuery<ListExports200>({
    queryKey: ["exports"],
    queryFn: async () => {
      const res = await fetch(getApiUrl("/exports"), { headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Failed to load exports");
      return res.json() as Promise<ListExports200>;
    },
  });

  return (
    <AppShell>
      <div className="p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Export History</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            {data?.total != null ? `${data.total} export${data.total !== 1 ? "s" : ""} total` : "All your exported videos"}
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 size={28} className="animate-spin text-muted-foreground" />
          </div>
        ) : !data?.exports?.length ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <FileVideo size={48} className="text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-medium text-lg">No exports yet</p>
            <p className="text-muted-foreground/60 text-sm mt-1 mb-6">Export your first video to see it here</p>
            <Button onClick={() => navigate("/projects")} className="gap-2">
              <Download size={16} /> Go to Projects
            </Button>
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl divide-y divide-border">
            {data.exports.map((exp: ExportRecord) => (
              <div key={exp.id} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <FileVideo size={18} className="text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{exp.projectTitle ?? "Untitled Project"}</p>
                  <p className="text-xs text-muted-foreground">
                    Exported {new Date(exp.exportedAt).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}
                  </p>
                </div>
                <PlatformBadge platform={exp.platform} />
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  );
}
