export default function Slide14Pipeline() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A1628",
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "22vw", height: "3vh", backgroundColor: "#FFFFFF", opacity: 0.06, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#FFFFFF", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            AI Processing Pipeline
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>State Machine</div>
          <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
            <div style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "1.5vh 1.5vw", fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>uploaded</div>
            <div style={{ color: "#A0AEC0", fontSize: "1.2vw", padding: "0 1vw" }}>→</div>
            <div style={{ backgroundColor: "#F59E0B", padding: "1.5vh 1.5vw", fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>processing</div>
            <div style={{ color: "#A0AEC0", fontSize: "1.2vw", padding: "0 1vw" }}>→</div>
            <div style={{ backgroundColor: "#22C55E", padding: "1.5vh 1.5vw", fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>ready</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0", paddingLeft: "22vw" }}>
            <div style={{ color: "#A0AEC0", fontSize: "1.2vw", padding: "0 1vw" }}>↘</div>
            <div style={{ backgroundColor: "#EF4444", padding: "1.5vh 1.5vw", fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>failed</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Processing Stages</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95vw", color: "#E2E8F0" }}>Analyzing video structure and detecting key moments</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#22C55E", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95vw", color: "#E2E8F0" }}>Generating platform-specific captions</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#F59E0B", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95vw", color: "#FFFFFF", fontWeight: 600 }}>Optimizing aspect ratio and pacing for TikTok...</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", opacity: 0.4 }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#A0AEC0", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95vw", color: "#A0AEC0" }}>Preparing Instagram Reel format</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", opacity: 0.4 }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#A0AEC0", flexShrink: 0 }} />
                <div style={{ fontSize: "0.95vw", color: "#A0AEC0" }}>Finalizing YouTube export</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Technical Decisions</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "2.5vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>Polling over WebSockets</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.6 }}>2-second poll intervals deliver imperceptibly similar UX to SSE/WS, with zero WebSocket infrastructure overhead. Frontend already structured to swap to subscriptions — <span style={{ fontFamily: "'DM Mono', monospace", color: "#E2E8F0" }}>refetchInterval</span> becomes a subscription call.</div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "2.5vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>Auto-stop on completion</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.6 }}><span style={{ fontFamily: "'DM Mono', monospace", color: "#E2E8F0" }}>refetchInterval</span> set to 2000ms when status is "processing" or "uploaded", disabled when "ready" or "failed". Component automatically stops polling — no cleanup required.</div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.15)", padding: "2.5vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>Swap-ready architecture</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.6 }}>Mock pipeline in current implementation. The UX contract is identical to a real implementation. Replacing mock with FFmpeg workers or AWS MediaConvert requires zero frontend changes.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>AI Pipeline / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#FFFFFF", fontWeight: 600 }}>14</div>
      </div>
    </div>
  );
}
