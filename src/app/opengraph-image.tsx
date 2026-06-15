import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolioData";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const { personal } = portfolioData;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#120d06",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top amber gradient line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(to right, transparent, #f59e0b 40%, #f59e0b 60%, transparent)",
          }}
        />

        {/* Role label */}
        <p
          style={{
            fontSize: 16,
            color: "#d97706",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            marginBottom: 20,
            marginTop: 0,
          }}
        >
          {personal.role}
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#fef3c7",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          {personal.name}
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: 22,
            color: "#92400e",
            marginTop: 24,
            marginBottom: 0,
            maxWidth: 640,
            lineHeight: 1.4,
          }}
        >
          {personal.tagline}
        </p>

        {/* Tech chips */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 44,
          }}
        >
          {["React", "Next.js", "TypeScript", "Vue.js", "Angular"].map(
            (tech) => (
              <span
                key={tech}
                style={{
                  background: "rgba(245,158,11,0.12)",
                  border: "1px solid rgba(245,158,11,0.35)",
                  borderRadius: 999,
                  padding: "6px 18px",
                  color: "#f59e0b",
                  fontSize: 15,
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>

        {/* Location — bottom right */}
        <p
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 14,
            color: "#78350f",
            margin: 0,
          }}
        >
          {personal.location}
        </p>
      </div>
    ),
    size
  );
}
