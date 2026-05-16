export default function Slide04UserResearch() {
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
            User Research
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
        <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "3.5vh 2.5vw", display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Primary User</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Alex, 28</div>
            <div style={{ fontSize: "1vw", color: "#4A5568", marginTop: "0.5vh" }}>Tech Review & Productivity Creator</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6 }}>
            Records in 16:9 on a mirrorless camera. Edits in DaVinci Resolve. Spends 2–3 hours in post — then another 2–3 hours re-exporting and re-captioning for each short-form platform.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pain Points</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>Captions on TikTok require a separate tool after upload</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>YouTube Shorts cropping always cuts off the wrong part</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>Tracking which version went where is manual and error-prone</div>
          </div>
          <div style={{ backgroundColor: "#F7FAFC", padding: "2vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Success scenario</div>
            <div style={{ fontSize: "0.95vw", color: "#0A1628", lineHeight: 1.5, fontStyle: "italic" }}>
              Upload once at 9pm, come back at 9:05pm to download four files, post them all before 10pm.
            </div>
          </div>
        </div>

        <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "3.5vh 2.5vw", display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1vh" }}>Secondary User</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>Maria, 34</div>
            <div style={{ fontSize: "1vw", color: "#4A5568", marginTop: "0.5vh" }}>Fitness & Lifestyle Coach</div>
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6 }}>
            Shoots vertically on iPhone. Uses Instagram's built-in editor and CapCut. Less technical — frustrated by UX inconsistency across platforms. Captions are critical (gym audience watches without sound).
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pain Points</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>Uploading the same video twice with different caption styles is tedious</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>Doesn't know aspect ratio or duration rules per platform</div>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.5, paddingLeft: "1vw", borderLeft: "2px solid #E2E8F0" }}>Wants to look professional without a production team</div>
          </div>
          <div style={{ backgroundColor: "#F7FAFC", padding: "2vh 1.5vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Success scenario</div>
            <div style={{ fontSize: "0.95vw", color: "#0A1628", lineHeight: 1.5, fontStyle: "italic" }}>
              Pick her platforms, let the AI figure out the formatting details, download the results.
            </div>
          </div>
        </div>

        <div style={{ width: "20vw", backgroundColor: "#0A1628", padding: "3.5vh 2vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", textTransform: "uppercase", letterSpacing: "0.08em" }}>Edge Case</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
          <div style={{ fontSize: "1.4vw", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Brand Manager</div>
          <div style={{ fontSize: "0.95vw", color: "#E2E8F0", lineHeight: 1.6 }}>
            Posts on behalf of a small brand team. Values export history for approval workflows and structured project management over raw speed.
          </div>
          <div style={{ marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "1vh" }}>Key need</div>
            <div style={{ fontSize: "0.95vw", color: "#FFFFFF", fontStyle: "italic", lineHeight: 1.4 }}>Record-keeping and traceability per platform.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>User Research / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>04</div>
      </div>
    </div>
  );
}
