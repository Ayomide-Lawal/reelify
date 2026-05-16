export default function Slide11DesignSystem() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "17vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Design System
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "2vh" }}>Color System — Dark First</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "3vw", height: "3vh", backgroundColor: "hsl(224, 71%, 4%)", border: "1px solid #E2E8F0" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A5568", minWidth: "10vw" }}>hsl(224 71% 4%)</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Background — deep navy-black</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "3vw", height: "3vh", backgroundColor: "hsl(224, 71%, 6%)", border: "1px solid #E2E8F0" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A5568", minWidth: "10vw" }}>hsl(224 71% 6%)</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Card — slightly lighter for depth</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "3vw", height: "3vh", backgroundColor: "hsl(263, 70%, 68%)", border: "1px solid #E2E8F0" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A5568", minWidth: "10vw" }}>hsl(263 70% 68%)</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Primary — violet-purple (brand CTA)</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center" }}>
                <div style={{ width: "3vw", height: "3vh", backgroundColor: "hsl(198, 93%, 60%)", border: "1px solid #E2E8F0" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A5568", minWidth: "10vw" }}>hsl(198 93% 60%)</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Accent — cyan (metrics, highlights)</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Status Colors</div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ display: "flex", gap: "0.8vw", alignItems: "center" }}>
                <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Processing — amber</div>
              </div>
              <div style={{ display: "flex", gap: "0.8vw", alignItems: "center" }}>
                <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", backgroundColor: "#22C55E" }} />
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Ready — green</div>
              </div>
              <div style={{ display: "flex", gap: "0.8vw", alignItems: "center" }}>
                <div style={{ width: "1.2vw", height: "1.2vw", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Failed — red</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Rationale</div>
            <p style={{ fontSize: "1vw", color: "#4A5568", lineHeight: 1.6, margin: 0 }}>
              Dark theme is the default and only mode — content creation tools skew dark, creators work in low-light environments, and it reduces eye strain during extended sessions.
            </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Typography</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
              <div style={{ display: "flex", gap: "2vw", alignItems: "baseline", borderBottom: "1px solid #E2E8F0", paddingBottom: "1.5vh" }}>
                <div style={{ fontSize: "2.5vw", fontWeight: 700, color: "#0A1628", lineHeight: 1 }}>Aa</div>
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>Inter</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>400 · 500 · 600 · 700 — Body, labels, headings</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2vw", alignItems: "baseline" }}>
                <div style={{ fontSize: "2.5vw", fontWeight: 600, color: "#0A1628", lineHeight: 1, fontFamily: "'DM Mono', monospace" }}>Aa</div>
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>DM Mono</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Labels, metadata, slide numbers, codes</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Spacing System</div>
            <div style={{ display: "flex", gap: "1vw", alignItems: "flex-end" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>4px</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>8px</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>12px</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>16px</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "3vw", height: "3vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>24px</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
                <div style={{ width: "4vw", height: "4vw", backgroundColor: "#0A1628" }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75vw", color: "#A0AEC0" }}>32px</div>
              </div>
            </div>
            <div style={{ fontSize: "0.85vw", color: "#4A5568", marginTop: "1.5vh" }}>4px base unit · Page containers max at 4xl (896px)</div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Component Architecture</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", borderLeft: "2px solid #0A1628", paddingLeft: "1vw" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#0A1628" }}>Primitives</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>shadcn/ui + Radix UI — accessibility, keyboard nav, ARIA</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", borderLeft: "2px solid #E2E8F0", paddingLeft: "1vw" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#0A1628" }}>Composed</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>PlatformBadge · StatusBanner · AppShell</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "center", borderLeft: "2px solid #E2E8F0", paddingLeft: "1vw" }}>
                <div style={{ fontSize: "0.95vw", fontWeight: 700, color: "#0A1628" }}>Pages</div>
                <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Data fetching + state — typed props, zero any</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Design System / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>11</div>
      </div>
    </div>
  );
}
