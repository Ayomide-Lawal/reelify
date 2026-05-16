export default function Slide02Problem() {
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
            The Problem
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <p style={{ fontSize: "1.5vw", fontWeight: 600, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>
            Multi-platform publishing is a tax on creative output.
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1.1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
            A single piece of content — say, a 10-minute product walkthrough — must become four different things for four different platforms. Each conversion requires a different crop, caption style, pacing, and upload workflow.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>01</div>
              <div style={{ fontSize: "1.05vw", color: "#4A5568", lineHeight: 1.5 }}>60-second vertically cropped TikTok with caption-heavy styling</div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>02</div>
              <div style={{ fontSize: "1.05vw", color: "#4A5568", lineHeight: 1.5 }}>60-second YouTube Short with clean subtitles</div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>03</div>
              <div style={{ fontSize: "1.05vw", color: "#4A5568", lineHeight: 1.5 }}>90-second Instagram Reel with aesthetic caption styling</div>
            </div>
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#A0AEC0", fontWeight: 600, minWidth: "2vw" }}>04</div>
              <div style={{ fontSize: "1.05vw", color: "#4A5568", lineHeight: 1.5 }}>Full-length horizontal YouTube video with auto-chapters</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "3vh 2.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>For 3 videos/week × 4 platforms</div>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>12</div>
            <div style={{ fontSize: "1.1vw", color: "#4A5568", marginTop: "1vh" }}>separate editing sessions per week — most mechanical, not creative.</div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "3vh 2.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Caption pain point</div>
            <p style={{ fontSize: "1.1vw", color: "#E2E8F0", lineHeight: 1.5, margin: 0 }}>
              85% of viewers watch without sound. Auto-captions arrive post-upload, can't be batch-applied, and are inconsistent across platforms. Creators either caption manually or skip it entirely.
            </p>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2.5vh 2.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Creator quote</div>
            <p style={{ fontSize: "1.2vw", color: "#0A1628", lineHeight: 1.5, margin: 0, fontStyle: "italic", fontWeight: 500 }}>
              "I spend more time re-formatting than actually creating."
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginTop: "1vh" }}>— Alex, Tech/Productivity Creator</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Problem Statement / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>02</div>
      </div>
    </div>
  );
}
