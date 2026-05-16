export default function Slide15Freemium() {
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
            Freemium &amp; Export Limits
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>The Timing Problem</div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          <p style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0A1628", margin: 0, lineHeight: 1.4 }}>
            "Upgrade prompts at the right moment drive conversion."
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ flex: 1, border: "2px solid #EF4444", padding: "2vh 1.5vw" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#EF4444", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Too aggressive</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Every action is gated. User hits a wall without warning. Frustration spikes. Trust erodes.</div>
              </div>
              <div style={{ flex: 1, border: "2px solid #EF4444", padding: "2vh 1.5vw" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#EF4444", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Too passive</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>User has 0 exports left with no warning. Surprise limit creates frustration instead of upgrade intent.</div>
              </div>
            </div>
            <div style={{ border: "2px solid #22C55E", padding: "2vh 1.5vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#22C55E", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.08em" }}>Reelify's approach</div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Proactive amber banner on the dashboard when <strong>1 export remains</strong> — before the wall is hit. The upgrade path is always one navigation step away.</div>
            </div>
          </div>

          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "1vh" }}>Limit Enforcement</div>
          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2vh 2vw" }}>
            <div style={{ fontSize: "0.95vw", color: "#4A5568", lineHeight: 1.6 }}>
              Server-side check on every export request. Batch exports blocked if <span style={{ fontFamily: "'DM Mono', monospace", color: "#0A1628" }}>edits.length &gt; remaining</span>. Error message always includes: how many you had, and where to go to get more.
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#0A1628", marginTop: "1.5vh", backgroundColor: "#E2E8F0", padding: "0.8vh 1vw" }}>
              "Only 2 exports remaining this month. Select fewer videos or upgrade to Pro."
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pricing Tiers</div>
          <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "3vh 2vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Free</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#0A1628", letterSpacing: "-0.04em" }}>$0</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>per month</div>
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>✓ 3 exports per month</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>✓ All 4 platforms</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>✓ AI captions included</div>
                <div style={{ fontSize: "0.9vw", color: "#A0AEC0" }}>✗ Export history</div>
                <div style={{ fontSize: "0.9vw", color: "#A0AEC0" }}>✗ Priority processing</div>
              </div>
              <div style={{ border: "1px solid #E2E8F0", padding: "1.2vh", textAlign: "center", fontSize: "0.9vw", fontWeight: 700, color: "#0A1628" }}>
                Start for free
              </div>
            </div>
            <div style={{ flex: 1, backgroundColor: "#0A1628", padding: "3vh 2vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#A0AEC0", marginBottom: "0.5vh" }}>Pro</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em" }}>$12</div>
                <div style={{ fontSize: "0.85vw", color: "#A0AEC0" }}>per month</div>
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", flex: 1 }}>
                <div style={{ fontSize: "0.9vw", color: "#FFFFFF" }}>✓ Unlimited exports</div>
                <div style={{ fontSize: "0.9vw", color: "#FFFFFF" }}>✓ All 4 platforms</div>
                <div style={{ fontSize: "0.9vw", color: "#FFFFFF" }}>✓ AI captions included</div>
                <div style={{ fontSize: "0.9vw", color: "#FFFFFF" }}>✓ Full export history</div>
                <div style={{ fontSize: "0.9vw", color: "#FFFFFF" }}>✓ Priority processing</div>
              </div>
              <div style={{ backgroundColor: "#FFFFFF", padding: "1.2vh", textAlign: "center", fontSize: "0.9vw", fontWeight: 700, color: "#0A1628" }}>
                Upgrade to Pro
              </div>
            </div>
          </div>
          <div style={{ border: "1px solid #E2E8F0", padding: "2vh 2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#718096", marginBottom: "0.8vh" }}>Stripe Integration</div>
            <div style={{ fontSize: "0.9vw", color: "#4A5568", lineHeight: 1.5 }}>Stripe Checkout + webhook signature verification. Subscription state synced to database. Export limits enforced server-side on every request.</div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Freemium Model / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>15</div>
      </div>
    </div>
  );
}
