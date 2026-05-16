import { useState, useCallback } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAuthHeaders } from "@/lib/api";
import { useAuth } from "@/lib/auth";
import { Upload, Film, CheckSquare, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE_URL = import.meta.env.BASE_URL;

function getApiUrl(path: string) {
  return `${BASE_URL}api${path}`;
}

const PLATFORMS = [
  { id: "tiktok", label: "TikTok", desc: "9:16 · Up to 60s · Bold captions", icon: "♪" },
  { id: "youtube_shorts", label: "YouTube Shorts", desc: "9:16 · Up to 60s · Clean subtitles", icon: "▶" },
  { id: "instagram_reels", label: "Instagram Reels", desc: "9:16 · Up to 90s · Aesthetic style", icon: "◈" },
  { id: "youtube", label: "YouTube", desc: "16:9 · Full length · Auto chapters", icon: "▶" },
];

export default function UploadPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [title, setTitle] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["tiktok", "youtube_shorts"]);
  const [error, setError] = useState("");

  const togglePlatform = (id: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const ACCEPTED_TYPES = ["video/mp4", "video/quicktime", "video/webm"];
  const MAX_SIZE_BYTES = 500 * 1024 * 1024; // 500 MB

  const validateFile = (f: File): string | null => {
    if (!ACCEPTED_TYPES.includes(f.type)) {
      return "Only MP4, MOV, and WebM videos are supported.";
    }
    if (f.size > MAX_SIZE_BYTES) {
      return "File must be under 500 MB.";
    }
    return null;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) {
      const err = validateFile(dropped);
      if (err) { setError(err); return; }
      setFile(dropped);
      if (!title) setTitle(dropped.name.replace(/\.[^/.]+$/, ""));
    }
  }, [title]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const err = validateFile(selected);
      if (err) { setError(err); return; }
      setFile(selected);
      if (!title) setTitle(selected.name.replace(/\.[^/.]+$/, ""));
    }
  };

  const createProjectMutation = useMutation({
    mutationFn: async () => {
      const userId = user?.id ?? "00000000-0000-4000-a000-000000000000";
      const tempId = `tmp-${Date.now()}`;

      const res = await fetch(getApiUrl("/projects"), {
        method: "POST",
        headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title || file?.name || "Untitled Project",
          originalVideoPath: `${userId}/${tempId}/${file?.name ?? "video.mp4"}`,
          originalFileName: file?.name ?? "video.mp4",
          originalFileSize: file?.size ?? 1,
          originalDuration: null,
          targetPlatforms: selectedPlatforms,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message ?? "Failed to create project");
      }

      const project = await res.json();

      const startRes = await fetch(getApiUrl("/processing/start"), {
        method: "POST",
        headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ projectId: project.id }),
      });

      if (!startRes.ok) throw new Error("Failed to start processing");

      return project;
    },
    onSuccess: (project) => {
      navigate(`/projects/${project.id}`);
    },
    onError: (err: Error) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!file) { setError("Please select a video file."); return; }
    if (selectedPlatforms.length === 0) { setError("Select at least one platform."); return; }
    createProjectMutation.mutate();
  };

  return (
    <AppShell>
      <div className="p-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">New Project</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Upload a video and choose your target platforms</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="mb-2 block">Video file</Label>
            {file ? (
              <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                <Film size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(1)} MB</p>
                </div>
                <Button type="button" variant="ghost" size="icon" onClick={() => setFile(null)} className="h-7 w-7">
                  <X size={14} />
                </Button>
              </div>
            ) : (
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={cn(
                  "relative border-2 border-dashed rounded-xl p-10 text-center transition-colors",
                  isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-card/50"
                )}
              >
                <Upload size={32} className="mx-auto text-muted-foreground mb-3" />
                <p className="text-sm font-medium text-foreground mb-1">Drop your video here</p>
                <p className="text-xs text-muted-foreground mb-4">MP4, MOV, WebM up to 500 MB</p>
                <label className="cursor-pointer">
                  <span className="text-xs font-medium text-primary hover:underline">Browse files</span>
                  <input type="file" accept="video/mp4,video/quicktime,video/webm" onChange={handleFileInput} className="sr-only" />
                </label>
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="title">Project title</Label>
            <Input
              id="title"
              placeholder="My awesome video"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label className="mb-2 block">Target platforms</Label>
            <div className="space-y-2">
              {PLATFORMS.map(({ id, label, desc, icon }) => {
                const selected = selectedPlatforms.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => togglePlatform(id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3.5 rounded-xl border text-left transition-colors",
                      selected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40"
                    )}
                  >
                    {selected ? <CheckSquare size={16} className="text-primary flex-shrink-0" /> : <Square size={16} className="text-muted-foreground flex-shrink-0" />}
                    <span className="text-base">{icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {error && <p className="text-destructive text-sm">{error}</p>}

          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={() => navigate("/dashboard")}>
              Cancel
            </Button>
            <Button type="submit" disabled={createProjectMutation.isPending} className="flex-1">
              {createProjectMutation.isPending ? "Creating project..." : "Upload & Process"}
            </Button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}
