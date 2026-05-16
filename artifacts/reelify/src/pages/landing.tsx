import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Zap, ChevronRight, Star, Upload, Cpu, Download } from "lucide-react";

const PLATFORMS = [
  { name: "TikTok", icon: "♪", color: "text-white bg-zinc-800" },
  { name: "YouTube Shorts", icon: "▶", color: "text-red-400 bg-red-950/50" },
  { name: "Instagram Reels", icon: "◈", color: "text-pink-400 bg-pink-950/50" },
  { name: "YouTube", icon: "▶", color: "text-red-400 bg-red-950/50" },
];

const STEPS = [
  { icon: Upload, title: "Upload Your Video", desc: "Drop your raw footage — any length, any format." },
  { icon: Cpu, title: "AI Processing", desc: "Our AI detects highlights, trims dead air, and adds captions." },
  { icon: Download, title: "Download All Formats", desc: "Get platform-ready versions with one click." },
];

const TESTIMONIALS = [
  { text: "I used to spend 4 hours editing one video for each platform. Reelify cut that to 10 minutes.", name: "Alex R.", role: "Travel Creator" },
  { text: "The captions are surprisingly accurate. My engagement went up 3x in the first week.", name: "Maria L.", role: "Fitness Coach" },
  { text: "Finally a tool that actually understands TikTok's pacing vs. YouTube's format.", name: "Jordan K.", role: "Tech Reviewer" },
];

export default function LandingPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Zap size={16} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">Reelify</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate("/login")}>Log in</Button>
            <Button onClick={() => navigate("/signup")}>Get Started Free</Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
            <Star size={12} />
            AI-powered multi-platform editing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            One video.{" "}
            <span className="text-primary">Four platforms.</span>
            <br />Zero extra work.
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Upload your raw footage and Reelify's AI engine creates perfectly optimized
            clips for TikTok, YouTube Shorts, Instagram Reels, and YouTube — captions included.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="h-12 px-8 text-base" onClick={() => navigate("/signup")}>
              Start for free <ChevronRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={() => navigate("/login")}>
              Sign in
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">No credit card required · 3 free exports/month</p>
        </div>
      </section>

      <section className="py-12 border-y border-border bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Optimized for every platform</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {PLATFORMS.map(({ name, icon, color }) => (
              <div key={name} className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium ${color}`}>
                <span className="text-lg">{icon}</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg">From raw footage to polished content in minutes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {STEPS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="text-sm font-medium text-primary mb-2">Step {i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Loved by creators</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ text, name, role }) => (
              <div key={name} className="bg-card border border-border rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{text}"</p>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to go multi-platform?</h2>
          <p className="text-muted-foreground text-lg mb-10">Join thousands of creators saving hours every week.</p>
          <Button size="lg" className="h-12 px-10 text-base" onClick={() => navigate("/signup")}>
            Get started for free <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Zap size={12} className="text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold">Reelify</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Reelify. Built for solo creators.</p>
        </div>
      </footer>
    </div>
  );
}
