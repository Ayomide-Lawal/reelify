export default function Slide10ExportIteration() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "21vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Iteration: Export UX
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Before — Single Button</div>
          <div style={{ border: "1px solid #E2E8F0", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", gap: "2vh", flex: 1 }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628" }}>Project: Morning Routine Video</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", borderRadius: "2px" }}>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A1628" }}>TikTok</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>9:16 — 60s — Captions ready</div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", borderRadius: "2px" }}>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A1628" }}>YouTube Shorts</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>9:16 — 60s — Captions ready</div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", borderRadius: "2px" }}>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0A1628" }}>Instagram Reel</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>9:16 — 90s — Captions ready</div>
              </div>
            </div>
            <div style={{ backgroundColor: "#0A1628", color: "#FFFFFF", padding: "1.5vh", textAlign: "center", fontSize: "1vw", fontWeight: 700, marginTop: "auto" }}>
              Export All
            </div>
          </div>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.5vh" }}>Problem</div>
            <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Testing revealed confusion — users weren't sure which platforms were included in "Export All" without re-reading the list.</div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "4vw" }}>
          <div style={{ fontSize: "2vw", color: "#A0AEC0" }}>→</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>After — Per-Platform + Count</div>
          <div style={{ backgroundColor: "#0A1628", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", gap: "2vh", flex: 1 }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#FFFFFF" }}>Project: Morning Routine Video</div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF" }}>TikTok</div>
                  <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>9:16 · 60s · Captions ready</div>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.85vw", fontWeight: 600 }}>Download</div>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF" }}>YouTube Shorts</div>
                  <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>9:16 · 60s · Captions ready</div>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.85vw", fontWeight: 600 }}>Download</div>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF" }}>Instagram Reel</div>
                  <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>9:16 · 90s · Captions ready</div>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.85vw", fontWeight: 600 }}>Download</div>
              </div>
            </div>
            <div style={{ backgroundColor: "#FFFFFF", color: "#0A1628", padding: "1.5vh", textAlign: "center", fontSize: "1vw", fontWeight: 700, marginTop: "auto" }}>
              Export All (3) — staggered 600ms
            </div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "1.5vh 1.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Result</div>
            <div style={{ fontSize: "0.9vw", color: "#FFFFFF", lineHeight: 1.5 }}>Explicit count eliminates ambiguity. Per-platform downloads allow selective export. Staggered batch prevents browser download blocking.</div>
          </div>
        </div>

        <div style={{ flex: 0.7, display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Technical Note</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            Downloads use <span style={{ fontFamily: "'DM Mono', monospace", color: "#0A1628" }}>fetch + blob URL</span> rather than anchor navigation — the only pattern that preserves the Authorization header across the download request.
          </p>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", backgroundColor: "#F7FAFC", padding: "1vh 1vw", lineHeight: 1.8 }}>
            <div>POST /exports/download</div>
            <div>→ record export</div>
            <div>→ return file URL</div>
            <div>→ fetch with auth header</div>
            <div>→ blob URL → trigger</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Key Iteration / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>10</div>
      </div>
    </div>
  );
}
