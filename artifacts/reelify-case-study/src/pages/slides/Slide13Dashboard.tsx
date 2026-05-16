export default function Slide13Dashboard() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "14vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Dashboard UX
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1.3, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <p style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>
            The dashboard answers one implicit question on every login: "where am I?"
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />

          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh" }}>Total Projects</div>
              <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>14</div>
            </div>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh" }}>Total Exports</div>
              <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>38</div>
            </div>
            <div style={{ flex: 1, backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh" }}>This Month</div>
              <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>2/3</div>
            </div>
          </div>

          <div style={{ border: "2px solid #F59E0B", backgroundColor: "#FFFBEB", padding: "2vh 2vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#92400E" }}>1 export remaining this month</div>
              <div style={{ fontSize: "0.9vw", color: "#B45309", marginTop: "0.5vh" }}>Upgrade to Pro for unlimited exports</div>
            </div>
            <div style={{ backgroundColor: "#92400E", color: "#FFFFFF", padding: "0.8vh 1.5vw", fontSize: "0.9vw", fontWeight: 700 }}>
              Upgrade →
            </div>
          </div>

          <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "2vh 2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Recent Projects</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2vh 0", borderBottom: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 600, color: "#0A1628" }}>Morning Routine — Week 12</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#22C55E" }}>Ready</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2vh 0", borderBottom: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 600, color: "#0A1628" }}>Product Review — DJI Osmo</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#F59E0B" }}>Processing</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.2vh 0" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 600, color: "#0A1628" }}>Studio Tour — Q2 2025</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#22C55E" }}>Ready</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.7, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Design Decisions</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.8vh" }}>Stat cards answer immediately</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Three cards answer "where am I?" on every login. No scrolling required for the most important information.</div>
            </div>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.8vh" }}>Upgrade nudge timing</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Amber banner appears when 1 export remains — proactively, before the wall is hit. Surprise limits cause frustration; anticipated limits cause upgrades.</div>
            </div>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.8vh" }}>Recent projects = "what was I working on?"</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Answers the session re-entry question without requiring the user to navigate to the full project list.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Dashboard UX / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>13</div>
      </div>
    </div>
  );
}
