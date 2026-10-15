import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#251E16",
          color: "#C9A96E",
          fontSize: 44,
          fontStyle: "italic",
          fontFamily: "Georgia, serif",
        }}
      >
        V
      </div>
    ),
    size
  );
}
