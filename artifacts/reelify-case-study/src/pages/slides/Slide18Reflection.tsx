export default function Slide18Reflection() {
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
        <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Reflection &amp; Roadmap</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>What Worked</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>Project-centric data model</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.5 }}>Treating the upload as a project enables history, re-export, and multi-platform management in one conceptual unit.</div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>Staged progress messages</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.5 }}>Significantly more engaging than a spinner. Makes the AI pipeline feel tangible and trustworthy.</div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>Typed-first architecture</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.5 }}>Sharing types between frontend and backend pays dividends immediately in autocomplete and catches contract violations at compile time.</div>
            </div>
            <div style={{ border: "1px solid rgba(255,255,255,0.12)", padding: "2vh 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.8vh" }}>Dark-first design</div>
              <div style={{ fontSize: "0.9vw", color: "#A0AEC0", lineHeight: 1.5 }}>Immediately positions the product in the creator tooling category alongside tools professional builders trust.</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Roadmap</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#7DD3FC", fontWeight: 700, minWidth: "3.5vw" }}>v2</div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.3vh" }}>Real AI + Auth + Storage</div>
                <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>FFmpeg video processing, Supabase JWT auth, Supabase Storage with signed URLs</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#7DD3FC", fontWeight: 700, minWidth: "3.5vw" }}>v3</div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.3vh" }}>Caption Editor + Realtime</div>
                <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>Inline caption review per platform, waveform visualization, Supabase Realtime push updates</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#7DD3FC", fontWeight: 700, minWidth: "3.5vw" }}>v4</div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.3vh" }}>Team Accounts + Brand Kit</div>
                <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>Approval workflows, logo/watermark/color scheme per platform, multi-user projects</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#7DD3FC", fontWeight: 700, minWidth: "3.5vw" }}>v5</div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.3vh" }}>Direct Publishing</div>
                <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>TikTok Creator API, YouTube Data API, Instagram Graph API — publish without leaving Reelify</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "auto", display: "flex", gap: "2vw" }}>
            <div style={{
              padding: "2vh 3vw",
              backgroundColor: "#FFFFFF",
              color: "#0A1628",
              fontSize: "1.1vw",
              fontWeight: 700,
            }}>
              View Live App
            </div>
            <div style={{
              padding: "2vh 3vw",
              border: "1px solid rgba(255,255,255,0.4)",
              color: "#FFFFFF",
              fontSize: "1.1vw",
              fontWeight: 700,
            }}>
              View Source
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Reflection & Roadmap / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#FFFFFF", fontWeight: 600 }}>18</div>
      </div>
    </div>
  );
}
