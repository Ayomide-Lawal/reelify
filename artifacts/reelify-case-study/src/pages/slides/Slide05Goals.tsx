export default function Slide05Goals() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "20vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Goals & Objectives
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ borderTop: "2px solid #0A1628", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Business</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Achieve product-market fit with solo cross-platform creators</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Freemium model: 3 free exports/month → Pro unlimited</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Stripe billing infrastructure for monthly subscription conversion</div>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>UX</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Raw upload to multi-platform export in under 5 minutes</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Platform selection intuitive — creators understand what they're getting before committing</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Real-time processing progress so users don't feel abandoned mid-workflow</div>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Usability</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Zero-friction onboarding — no credit card, no config, no tutorial</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Single-decision upload flow: pick platforms, name project, go</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Explicit empty, loading, and error states at every step</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Engagement</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Dashboard surfaces value immediately (total exports, recent projects, plan status)</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Upgrade prompt when limit is approaching — not after it's hit</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Export history reinforces product value over time</div>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Accessibility</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>WCAG AA contrast ratios throughout</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Fully keyboard-navigable sidebar and action buttons</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Semantic HTML structure for screen reader compatibility</div>
            </div>
          </div>
          <div style={{ borderTop: "2px solid #E2E8F0", paddingTop: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Scalability</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Schema-first API with Zod + Drizzle ORM shared types</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Component-driven frontend using shadcn/ui primitives</div>
              <div style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.5 }}>Stateless API server deployable behind a load balancer</div>
            </div>
          </div>
        </div>

        <div style={{ width: "18vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ backgroundColor: "#0A1628", padding: "3vh 2vw", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1 }}>5</div>
            <div style={{ fontSize: "1vw", color: "#A0AEC0", marginTop: "1vh" }}>minutes from upload to 4 downloads</div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2.5vh 2vw", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>0</div>
            <div style={{ fontSize: "1vw", color: "#4A5568", marginTop: "1vh" }}>`any` TypeScript casts in the frontend</div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2.5vh 2vw", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em", lineHeight: 1 }}>4</div>
            <div style={{ fontSize: "1vw", color: "#4A5568", marginTop: "1vh" }}>platforms supported out of the box</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Goals & Objectives / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>05</div>
      </div>
    </div>
  );
}
