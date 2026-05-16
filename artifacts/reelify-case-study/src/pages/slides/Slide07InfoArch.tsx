export default function Slide07InfoArch() {
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
            Information Architecture
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Navigation Structure</div>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2.5vh 2vw", fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", lineHeight: 2, color: "#4A5568" }}>
            <div style={{ color: "#0A1628", fontWeight: 700 }}>/ (Landing)</div>
            <div style={{ paddingLeft: "1.5vw" }}>├── /signup</div>
            <div style={{ paddingLeft: "1.5vw" }}>├── /login</div>
            <div style={{ paddingLeft: "1.5vw", color: "#0A1628", fontWeight: 600 }}>└── /dashboard (auth root)</div>
            <div style={{ paddingLeft: "3vw" }}>├── /upload</div>
            <div style={{ paddingLeft: "3vw" }}>├── /projects</div>
            <div style={{ paddingLeft: "4.5vw" }}>└── /projects/:id</div>
            <div style={{ paddingLeft: "3vw" }}>├── /exports</div>
            <div style={{ paddingLeft: "3vw" }}>├── /settings</div>
            <div style={{ paddingLeft: "3vw" }}>└── /pricing</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Workflow State Model</div>
            <div style={{ display: "flex", gap: "0" }}>
              <div style={{ flex: 1, backgroundColor: "#0A1628", color: "#FFFFFF", padding: "1.5vh 1vw", textAlign: "center", fontSize: "0.85vw", fontWeight: 700 }}>CREATE</div>
              <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
              <div style={{ flex: 1, border: "1px solid #E2E8F0", color: "#0A1628", padding: "1.5vh 1vw", textAlign: "center", fontSize: "0.85vw", fontWeight: 700 }}>MANAGE</div>
              <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
              <div style={{ flex: 1, border: "1px solid #E2E8F0", color: "#0A1628", padding: "1.5vh 1vw", textAlign: "center", fontSize: "0.85vw", fontWeight: 700 }}>EXPORT</div>
              <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
              <div style={{ flex: 1, border: "1px solid #E2E8F0", color: "#0A1628", padding: "1.5vh 1vw", textAlign: "center", fontSize: "0.85vw", fontWeight: 700 }}>REVIEW</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Sidebar Navigation Logic</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>01</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.4vh" }}>Dashboard</div>
                <div style={{ fontSize: "0.95vw", color: "#4A5568" }}>Hub — stats, recent projects, upgrade nudge</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>02</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.4vh" }}>My Projects</div>
                <div style={{ fontSize: "0.95vw", color: "#4A5568" }}>Project library — create → manage workflow</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>03</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.4vh" }}>Export History</div>
                <div style={{ fontSize: "0.95vw", color: "#4A5568" }}>Output surface — reinforces product value over time</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>04</div>
              <div>
                <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.4vh" }}>Settings</div>
                <div style={{ fontSize: "0.95vw", color: "#4A5568" }}>Account + billing — surfaced contextually, not buried</div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "2.5vh 2vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cognitive Load Strategy</div>
            <p style={{ fontSize: "1vw", color: "#E2E8F0", lineHeight: 1.6, margin: 0 }}>
              Platform selection is the highest-stakes decision. UI pre-selects TikTok and YouTube Shorts — reducing the decision to confirm-or-adjust rather than a blank-slate choice. Platform cards show aspect ratio and duration inline.
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Information Architecture / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>07</div>
      </div>
    </div>
  );
}
