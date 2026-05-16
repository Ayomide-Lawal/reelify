export default function Slide01Cover() {
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
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>
          reelify
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A5568",
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
          textAlign: "right",
        }}>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Project:</span>Reelify UX Case Study</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Timeline:</span>2025–2026</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Role:</span>Full-Stack Product Engineer / UI Designer</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Type:</span>Solo Build</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "15vh", left: "5vw", width: "90vw" }}>
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute",
            left: "-2vw",
            top: "2vh",
            width: "28vw",
            height: "5vh",
            backgroundColor: "#0A1628",
            opacity: 0.08,
            zIndex: 0,
          }} />
          <h1 style={{
            fontSize: "8vw",
            fontWeight: 900,
            color: "#0A1628",
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            position: "relative",
            zIndex: 1,
          }}>
            Reelify
          </h1>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "5vh",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <p style={{
              fontSize: "1.8vw",
              fontWeight: 500,
              color: "#4A5568",
              margin: 0,
              maxWidth: "48vw",
              lineHeight: 1.4,
            }}>
              One video. Four platforms. Zero extra work.
            </p>
            <div style={{ display: "flex", gap: "1vw" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", border: "1px solid #E2E8F0", padding: "0.5vh 0.8vw", fontWeight: 600 }}>React + Vite</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", border: "1px solid #E2E8F0", padding: "0.5vh 0.8vw", fontWeight: 600 }}>Express 5</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", border: "1px solid #E2E8F0", padding: "0.5vh 0.8vw", fontWeight: 600 }}>PostgreSQL</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", border: "1px solid #E2E8F0", padding: "0.5vh 0.8vw", fontWeight: 600 }}>TypeScript</span>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", border: "1px solid #E2E8F0", padding: "0.5vh 0.8vw", fontWeight: 600 }}>Stripe</span>
            </div>
          </div>
          <div style={{ width: "28vw", height: "1px", backgroundColor: "#E2E8F0" }} />
        </div>
      </div>
    </div>
  );
}
