import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#0a0a0a",
      color: "#ffffff",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: "24px",
      textAlign: "center",
    }}>
      <h1 style={{ fontSize: "72px", fontWeight: 700, margin: 0, letterSpacing: "-0.04em" }}>
        404
      </h1>
      <p style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)", margin: "16px 0 32px", maxWidth: "480px" }}>
        The page you are looking for could not be found. / 抱歉，您访问的页面不存在。
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          href="/en"
          style={{
            padding: "12px 24px",
            background: "#ffffff",
            color: "#000000",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Return Home (EN)
        </Link>
        <Link
          href="/zh"
          style={{
            padding: "12px 24px",
            background: "rgba(255, 255, 255, 0.12)",
            color: "#ffffff",
            borderRadius: "10px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          返回首页 (中文)
        </Link>
        <Link
          href="/en/release-notes/latest"
          style={{
            padding: "12px 24px",
            background: "transparent",
            color: "rgba(255, 255, 255, 0.7)",
            borderRadius: "10px",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Release Notes
        </Link>
      </div>
    </div>
  );
}
