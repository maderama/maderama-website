type SystemStyleToastProps = {
  title: string;
  message: string;
  iconUrl: string;
  time: string;
};

export default function SystemStyleToast({ title, message, iconUrl, time }: SystemStyleToastProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#f1f1f3",
        borderRadius: "18px",
        minWidth: "320px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        padding: "12px 16px",
        margin: 0,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      <img
        src={iconUrl}
        alt="App icon"
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "10px",
          objectFit: "cover",
          marginRight: "14px"
        }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2px"
          }}
        >
          <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>{title}</span>
          <span style={{ fontSize: "0.75rem", color: "#888" }}>{time}</span>
        </div>
        <div style={{ fontSize: "0.92rem", lineHeight: 1.4, textAlign: "left" }}>
          {message}
        </div>
      </div>
    </div>
  )
}