export default function Slide16FrontendEng() {
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
          <div style={{ position: "absolute", left: "-1vw", top: "1.5vh", width: "22vw", height: "3vh", backgroundColor: "#0A1628", opacity: 0.08, zIndex: 0 }} />
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#0A1628", margin: 0, lineHeight: 1, letterSpacing: "-0.03em", position: "relative", zIndex: 1 }}>
            Frontend Engineering
          </h2>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>reelify</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>TypeScript — Zero Any</div>
            <div style={{ backgroundColor: "#0A1628", padding: "2vh 2vw", fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", lineHeight: 2, color: "#A0AEC0" }}>
              <div><span style={{ color: "#E2E8F0" }}>// src/lib/types.ts — shared domain interfaces</span></div>
              <div><span style={{ color: "#7DD3FC" }}>export interface</span> <span style={{ color: "#FDE68A" }}>Project</span> {"{"}</div>
              <div style={{ paddingLeft: "1.5vw" }}>id: <span style={{ color: "#86EFAC" }}>string</span>;</div>
              <div style={{ paddingLeft: "1.5vw" }}>title: <span style={{ color: "#86EFAC" }}>string</span>;</div>
              <div style={{ paddingLeft: "1.5vw" }}>status: <span style={{ color: "#FDE68A" }}>ProcessingStatus</span>;</div>
              <div style={{ paddingLeft: "1.5vw" }}>platformEdits: <span style={{ color: "#FDE68A" }}>PlatformEdit</span>[];</div>
              <div>{"}"}</div>
              <div style={{ marginTop: "1vh", color: "#E2E8F0" }}>{"// useQuery<Project>(...) — typed at the generic level"}</div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>State Management</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "8vw" }}>TanStack Query</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>All server state — staleTime 30s, structured query keys for targeted invalidation</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "8vw" }}>React Context</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Auth only — the single global concern. No Redux, no Zustand.</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "8vw" }}>Query keys</div>
                <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#0A1628" }}>["project", id] · ["projects"] · ["dashboard-summary"]</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>State Coverage Contract</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              <div style={{ display: "flex", gap: "2vw", borderBottom: "1px solid #E2E8F0", padding: "1.5vh 0" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#E2E8F0", flexShrink: 0, marginTop: "0.2vh" }} />
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>Loading state</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Spinner centered in viewport — every data-fetching page</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2vw", borderBottom: "1px solid #E2E8F0", padding: "1.5vh 0" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#E2E8F0", flexShrink: 0, marginTop: "0.2vh" }} />
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>Empty state</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Illustration + copy + primary CTA — no blank screens</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2vw", borderBottom: "1px solid #E2E8F0", padding: "1.5vh 0" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#E2E8F0", flexShrink: 0, marginTop: "0.2vh" }} />
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>Error state</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Toast with title + description — upgrade errors distinguished from generic</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "2vw", padding: "1.5vh 0" }}>
                <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#0A1628", flexShrink: 0, marginTop: "0.2vh" }} />
                <div>
                  <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628" }}>Populated state</div>
                  <div style={{ fontSize: "0.85vw", color: "#4A5568" }}>Actual content — no unhandled undefined states</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "2.5vh 2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1.5vh" }}>Performance</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ display: "flex", gap: "1.5vw" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "7vw" }}>staleTime</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>30,000ms — dashboard and project data stays fresh without redundant refetches</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "7vw" }}>Polling scope</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Scoped only to active project detail page — not global</div>
              </div>
              <div style={{ display: "flex", gap: "1.5vw" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#A0AEC0", minWidth: "7vw" }}>15+ pages</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Zero any TypeScript casts across the entire frontend</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", right: "5vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>Frontend Engineering / Reelify</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>16</div>
      </div>
    </div>
  );
}
