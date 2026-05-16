export default function Slide12UploadFlow() {
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
            Upload Flow
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <p style={{ fontSize: "1.3vw", fontWeight: 600, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>
            Three decisions. That's all the creator has to make.
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ display: "flex", gap: "2.5vw", alignItems: "flex-start" }}>
            <div style={{ flex: 1, borderTop: "2px solid #0A1628", paddingTop: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "1vh" }}>Decision 01</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "1vh" }}>What's the file?</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Drag-and-drop zone. File type and size validated immediately — no server round trip.</div>
            </div>
            <div style={{ flex: 1, borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "1vh" }}>Decision 02</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "1vh" }}>What's the project?</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Project title inline. Ties naming to the moment of commitment — same mental context.</div>
            </div>
            <div style={{ flex: 1, borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "1vh" }}>Decision 03</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#0A1628", marginBottom: "1vh" }}>Which platforms?</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Pre-selects TikTok + YouTube Shorts. Cards show aspect ratio + duration inline.</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Accessibility Details</div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ flex: 1, fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5, borderLeft: "2px solid #E2E8F0", paddingLeft: "1vw" }}>
                Drop zone announces accepted file types. Keyboard focus state visible.
              </div>
              <div style={{ flex: 1, fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5, borderLeft: "2px solid #E2E8F0", paddingLeft: "1vw" }}>
                Error messages are text — never color-only or toast-only.
              </div>
              <div style={{ flex: 1, fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5, borderLeft: "2px solid #E2E8F0", paddingLeft: "1vw" }}>
                Platform cards use checkbox semantics with visible checked state.
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.8, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Platform Cards</div>
          <div style={{ backgroundColor: "#0A1628", padding: "2.5vh 2vw", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ border: "2px solid #FFFFFF", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>TikTok</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0" }}>9:16 · max 60s</div>
              </div>
              <div style={{ width: "1.2vw", height: "1.2vw", border: "2px solid #FFFFFF", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#0A1628" }} />
              </div>
            </div>
            <div style={{ border: "2px solid #FFFFFF", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>YouTube Shorts</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0" }}>9:16 · max 60s</div>
              </div>
              <div style={{ width: "1.2vw", height: "1.2vw", border: "2px solid #FFFFFF", backgroundColor: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#0A1628" }} />
              </div>
            </div>
            <div style={{ border: "2px solid rgba(255,255,255,0.3)", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.6 }}>
              <div>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>Instagram Reel</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0" }}>9:16 · max 90s</div>
              </div>
              <div style={{ width: "1.2vw", height: "1.2vw", border: "2px solid rgba(255,255,255,0.4)" }} />
            </div>
            <div style={{ border: "2px solid rgba(255,255,255,0.3)", padding: "1.5vh 1.5vw", display: "flex", justifyContent: "space-between", alignItems: "center", opacity: 0.6 }}>
              <div>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#FFFFFF" }}>YouTube</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0" }}>16:9 · no limit</div>
              </div>
              <div style={{ width: "1.2vw", height: "1.2vw", border: "2px solid rgba(255,255,255,0.4)" }} />
            </div>
          </div>
          <div style={{ fontSize: "0.85vw", color: "#4A5568", lineHeight: 1.5 }}>
            Submit disabled until: file + title + at least one platform are all valid. No surprises at server time.
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Upload Flow / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>12</div>
      </div>
    </div>
  );
}
