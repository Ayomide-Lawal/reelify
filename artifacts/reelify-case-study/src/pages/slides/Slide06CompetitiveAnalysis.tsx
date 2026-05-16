export default function Slide06CompetitiveAnalysis() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "22vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Competitive Analysis
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0" }}>
        <div style={{ display: "flex", gap: "0", borderBottom: "2px solid #0A1628" }}>
          <div style={{ flex: 1.4, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>Product</div>
          <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>Upload Flow</div>
          <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>Multi-Platform</div>
          <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>AI Captions</div>
          <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>Web App</div>
          <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", padding: "0 0 1.5vh 0" }}>Pricing</div>
        </div>

        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #E2E8F0", padding: "2.2vh 0", backgroundColor: "#0A1628" }}>
          <div style={{ flex: 1.4, display: "flex", alignItems: "center", gap: "1vw", paddingLeft: "0.5vw" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 800, color: "#FFFFFF" }}>Reelify</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0", border: "1px solid rgba(255,255,255,0.2)", padding: "0.2vh 0.6vw" }}>Our product</div>
          </div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#E2E8F0", display: "flex", alignItems: "center" }}>Single drag-and-drop</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#E2E8F0", display: "flex", alignItems: "center" }}>✓ All 4 major platforms</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#E2E8F0", display: "flex", alignItems: "center" }}>✓ AI-generated, per platform</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#E2E8F0", display: "flex", alignItems: "center" }}>✓ Full web app</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#E2E8F0", display: "flex", alignItems: "center" }}>Free (3/mo) → Pro</div>
        </div>

        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #E2E8F0", padding: "2.2vh 0" }}>
          <div style={{ flex: 1.4, fontSize: "1vw", fontWeight: 600, color: "#0A1628", display: "flex", alignItems: "center" }}>Opus Clip</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>URL or upload</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#718096", display: "flex", alignItems: "center" }}>Partial (TikTok, Shorts)</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>$15/mo+</div>
        </div>

        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #E2E8F0", padding: "2.2vh 0" }}>
          <div style={{ flex: 1.4, fontSize: "1vw", fontWeight: 600, color: "#0A1628", display: "flex", alignItems: "center" }}>CapCut Web</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>Per video</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#718096", display: "flex", alignItems: "center" }}>✗ Manual re-export</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>Free / Pro</div>
        </div>

        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #E2E8F0", padding: "2.2vh 0" }}>
          <div style={{ flex: 1.4, fontSize: "1vw", fontWeight: 600, color: "#0A1628", display: "flex", alignItems: "center" }}>Adobe Express</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>Per video</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#718096", display: "flex", alignItems: "center" }}>✗</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#718096", display: "flex", alignItems: "center" }}>Manual only</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>$10/mo</div>
        </div>

        <div style={{ display: "flex", gap: "0", padding: "2.2vh 0" }}>
          <div style={{ flex: 1.4, fontSize: "1vw", fontWeight: 600, color: "#0A1628", display: "flex", alignItems: "center" }}>Descript</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>Upload</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#718096", display: "flex", alignItems: "center" }}>✗</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>✓</div>
          <div style={{ flex: 1, fontSize: "0.95vw", color: "#4A5568", display: "flex", alignItems: "center" }}>$12/mo</div>
        </div>
      </div>

      <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2vh 2.5vw", marginTop: "2vh" }}>
        <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>
          <span style={{ fontWeight: 700, color: "#0A1628" }}>Reelify's differentiator: </span>
          The only tool that treats multi-platform publishing as a single workflow. Platform rules (aspect ratio, duration, pacing, caption style) are encoded into the processing engine — the user never has to think about them.
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Competitive Analysis / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>06</div>
      </div>
    </div>
  );
}
