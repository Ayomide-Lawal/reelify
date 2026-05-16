export default function Slide08UXProcess() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "14vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            UX Process
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "2.5vw", flex: 1 }}>
        <div style={{ flex: 1, borderTop: "2px solid #0A1628", paddingTop: "2.5vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", fontWeight: 600 }}>Phase 01</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Discovery</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            Identified core friction through user interviews with content creators: multi-platform export is universal, well-understood, and consistently unsolved.
          </p>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Hypothesis</div>
            <div style={{ fontSize: "0.9vw", color: "#0A1628", lineHeight: 1.4, fontStyle: "italic" }}>If formatting rules are deterministic, they can be automated. The human's job is the content, not the packaging.</div>
          </div>
        </div>

        <div style={{ flex: 1, borderTop: "2px solid #E2E8F0", paddingTop: "2.5vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", fontWeight: 600 }}>Phase 02</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Architecture</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            Chose a project-centric data model — one project equals one upload plus N platform edits. This unlocks history, re-export on demand, and per-platform processing state.
          </p>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Key Decision</div>
            <div style={{ fontSize: "0.9vw", color: "#0A1628", lineHeight: 1.4, fontStyle: "italic" }}>Mirrors how creators think: "this is my Q3 campaign video" — not just a file.</div>
          </div>
        </div>

        <div style={{ flex: 1, borderTop: "2px solid #E2E8F0", paddingTop: "2.5vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", fontWeight: 600 }}>Phase 03</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Prototyping</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            Iterated around one key question: when should platform selection happen? Before upload, during, or after? Chose inline — the decision ties to the moment of commitment.
          </p>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "1.5vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Outcome</div>
            <div style={{ fontSize: "0.9vw", color: "#0A1628", lineHeight: 1.4, fontStyle: "italic" }}>Platform selection happens in the same mental context as filling in the project title.</div>
          </div>
        </div>

        <div style={{ flex: 1, borderTop: "2px solid #E2E8F0", paddingTop: "2.5vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", fontWeight: 600 }}>Phase 04</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Iteration</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            Two key iterations discovered: spinners caused abandonment during processing, and "Export All" caused confusion about which platforms were included.
          </p>
          <div style={{ backgroundColor: "#0A1628", padding: "1.5vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.8vh" }}>Result</div>
            <div style={{ fontSize: "0.9vw", color: "#FFFFFF", lineHeight: 1.4, fontStyle: "italic" }}>Staged progress messages + per-platform export counts resolved both issues.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>UX Process / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>08</div>
      </div>
    </div>
  );
}
