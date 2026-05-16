export default function Slide03MarketGap() {
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "7vh" }}>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "16vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Market Gap
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <p style={{ fontSize: "1.3vw", fontWeight: 600, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>
            There is no tool that handles all four requirements in a single workflow.
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw", paddingTop: "0.2vh" }}>01</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Single upload entry point</div>
                <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>One file. One decision. One session.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw", paddingTop: "0.2vh" }}>02</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Platform-aware processing rules</div>
                <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Aspect ratio, max duration, pacing, and caption style encoded per platform.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw", paddingTop: "0.2vh" }}>03</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Simultaneous multi-platform generation</div>
                <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>All four versions produced in parallel, not sequentially.</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw", paddingTop: "0.2vh" }}>04</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Authenticated download session</div>
                <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Deliverable files with platform-encoded filenames, one authenticated fetch.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5vh" }}>Existing tools fall short</div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628" }}>Opus Clip</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", marginTop: "0.3vh" }}>Strong on highlights, skips YouTube 16:9</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", border: "1px solid #E2E8F0", padding: "0.4vh 0.8vw" }}>Partial</div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628" }}>CapCut Web</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", marginTop: "0.3vh" }}>Mobile-first, no cross-platform batch</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", border: "1px solid #E2E8F0", padding: "0.4vh 0.8vw" }}>Single</div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628" }}>Adobe Express</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", marginTop: "0.3vh" }}>Per-video, manual captions</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", border: "1px solid #E2E8F0", padding: "0.4vh 0.8vw" }}>Manual</div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628" }}>Descript</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", marginTop: "0.3vh" }}>No multi-platform export</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", border: "1px solid #E2E8F0", padding: "0.4vh 0.8vw" }}>Single</div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#FFFFFF" }}>Reelify</div>
              <div style={{ fontSize: "0.9vw", color: "#E2E8F0", marginTop: "0.3vh" }}>All 4 platforms, one upload, AI captions</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)", padding: "0.4vh 0.8vw" }}>Complete</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Market Gap / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>03</div>
      </div>
    </div>
  );
}
