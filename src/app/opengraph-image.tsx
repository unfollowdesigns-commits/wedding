import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vow — AI Wedding Planning That Actually Works";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1C1C1E",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Background gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,169,110,0.12), transparent)",
          }}
        />

        {/* Top rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(201,169,110,0.5)" }} />
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "rgba(201,169,110,0.7)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            AI Wedding Planning
          </span>
          <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(201,169,110,0.5)" }} />
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: "80px",
            fontWeight: "300",
            color: "#FFFFFF",
            lineHeight: 1.05,
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          Vow
        </div>

        <div
          style={{
            fontSize: "28px",
            fontWeight: "300",
            color: "rgba(255,255,255,0.55)",
            marginTop: "16px",
            textAlign: "center",
            fontFamily: "system-ui, sans-serif",
            maxWidth: "640px",
            lineHeight: 1.5,
          }}
        >
          The AI planning system that models your entire wedding as one connected system.
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "#C9A96E",
            margin: "32px 0",
          }}
        />

        {/* Stats row */}
        <div style={{ display: "flex", gap: "64px" }}>
          {[
            { val: "14", label: "vendors tracked" },
            { val: "97%", label: "RSVP accuracy" },
            { val: "$799", label: "founding rate" },
          ].map(({ val, label }) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}
            >
              <span style={{ fontSize: "32px", color: "#C9A96E", fontWeight: "300" }}>{val}</span>
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "system-ui, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
