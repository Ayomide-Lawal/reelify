export default function Slide09ProcessingIteration() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "26vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Iteration: Processing Feedback
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Before — Version 1</div>
          <div style={{ border: "2px solid #E2E8F0", padding: "4vh 3vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2vh", flex: 1 }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", border: "3px solid #E2E8F0", borderTop: "3px solid #A0AEC0", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "3px solid transparent", borderTop: "3px solid #0A1628", animation: "spin 1s linear infinite" }} />
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0" }}>Processing...</div>
            <div style={{ fontSize: "0.95vw", color: "#718096", textAlign: "center", maxWidth: "20vw", lineHeight: 1.5 }}>
              A generic spinner with no context, no progress, no estimated time.
            </div>
          </div>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2vh 2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Problem</div>
            <p style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
              User testing revealed immediate abandonment. No feedback loop means no trust. Users assumed the app had crashed or stalled.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "4vw" }}>
          <div style={{ fontSize: "2vw", color: "#A0AEC0" }}>→</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>After — Version 2</div>
          <div style={{ backgroundColor: "#0A1628", padding: "4vh 3vw", display: "flex", flexDirection: "column", gap: "2.5vh", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0" }}>Processing your video</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#FFFFFF" }}>67%</div>
              </div>
              <div style={{ height: "0.5vh", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                <div style={{ width: "67%", height: "100%", backgroundColor: "#FFFFFF", borderRadius: "2px" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                <div style={{ fontSize: "0.95vw", color: "#E2E8F0" }}>Analyzing video structure...</div>
              </div>
              <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                <div style={{ fontSize: "0.95vw", color: "#E2E8F0" }}>Generating captions...</div>
              </div>
              <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#F59E0B", animation: "pulse 1.5s ease-in-out infinite" }} />
                <div style={{ fontSize: "0.95vw", color: "#FFFFFF", fontWeight: 600 }}>Optimizing for TikTok...</div>
              </div>
              <div style={{ display: "flex", gap: "1vw", alignItems: "center", opacity: 0.4 }}>
                <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#A0AEC0" }} />
                <div style={{ fontSize: "0.95vw", color: "#A0AEC0" }}>Preparing Instagram Reel...</div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "2vh 2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Result</div>
            <p style={{ fontSize: "0.95vw", color: "#FFFFFF", lineHeight: 1.5, margin: 0 }}>
              Stage messages make the AI pipeline feel tangible. Users stay engaged during 30–90 second waits. Polling at 2s intervals stops automatically on completion.
            </p>
          </div>
        </div>

        <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>UX Principle</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1.3vw", fontWeight: 700, color: "#0A1628", lineHeight: 1.4, margin: 0 }}>
            "Staged progress messages beat spinners."
          </p>
          <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            "Generating captions for Instagram..." is more engaging than a loading bar. It makes automation feel tangible and trustworthy.
          </p>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginTop: "2vh" }}>Polling interval: 2s</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0" }}>Auto-stop on ready/failed</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Key Iteration / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>09</div>
      </div>
    </div>
  );
}
