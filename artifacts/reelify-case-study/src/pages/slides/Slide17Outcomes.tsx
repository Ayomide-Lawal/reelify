export default function Slide17Outcomes() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "18vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Outcomes &amp; Impact
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ flex: 1, backgroundColor: "#0A1628", padding: "3.5vh 2vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh" }}>Workflow time reduction</div>
              <div style={{ fontSize: "5vw", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1 }}>~4hr</div>
              <div style={{ fontSize: "1vw", color: "#A0AEC0", marginTop: "0.5vh" }}>→</div>
              <div style={{ fontSize: "3vw", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1 }}>&lt;10min</div>
              <div style={{ fontSize: "0.85vw", color: "#A0AEC0", marginTop: "1vh" }}>One upload, one wait, four downloads</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw" }}>
              <div style={{ border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw", flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Editing sessions eliminated</div>
                <div style={{ fontSize: "3vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>11/12</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568", marginTop: "0.5vh" }}>per video per week</div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw", flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Platform rules memorized</div>
                <div style={{ fontSize: "3vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>0</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568", marginTop: "0.5vh" }}>All encoded into the processing engine</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>TypeScript any casts</div>
              <div style={{ fontSize: "3vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>0</div>
              <div style={{ fontSize: "0.85vw", color: "#4A5568", marginTop: "0.5vh" }}>Fully typed from DB schema to React UI</div>
            </div>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "2.5vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Frontend changes to swap backend</div>
              <div style={{ fontSize: "3vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>0</div>
              <div style={{ fontSize: "0.85vw", color: "#4A5568", marginTop: "0.5vh" }}>Mock AI → real processing, zero rewrites</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.9, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Key Takeaways</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ borderLeft: "2px solid #0A1628", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Workflow simplification</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>The four-session manual workflow becomes one upload. Not a marginal improvement — a category change.</div>
            </div>
            <div style={{ borderLeft: "2px solid #E2E8F0", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Reduced cognitive load</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Aspect ratios, duration limits, and caption styles are encoded in the system. Creators never need to look them up.</div>
            </div>
            <div style={{ borderLeft: "2px solid #E2E8F0", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Product identity signal</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Dark minimal design places Reelify in the same register as Linear, Vercel, and Arc — communicates craft to the creator audience.</div>
            </div>
            <div style={{ borderLeft: "2px solid #E2E8F0", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Schema-first foundation</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Zod + Drizzle ORM typed end-to-end. Real AI processing, multi-user teams, and Supabase Storage are architectural upgrades, not rewrites.</div>
            </div>
          </div>
          <div style={{ backgroundColor: "#0A1628", padding: "2.5vh 2vw", marginTop: "auto" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", marginBottom: "1vh" }}>Product Maturity Principle</div>
            <p style={{ fontSize: "1vw", color: "#FFFFFF", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>
              "The UX contract can be production-quality before the backend is. Design the experience to spec, stub the data, ship the UX, then replace the stubs with real services."
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Outcomes & Impact / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>17</div>
      </div>
    </div>
  );
}
