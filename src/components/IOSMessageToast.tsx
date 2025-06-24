type IOSMessageToastProps = {
  sender: string;
  message: string;
  avatarUrl: string;
  icon: string;
  time: string;
};

export default function IOSMessageToast({
  sender,
  message,
  avatarUrl,
  icon,
  time
}: IOSMessageToastProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "#f1f1f3",
        borderRadius: "18px",
        padding: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
        minWidth: "320px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={avatarUrl}
          alt={`${sender} avatar`}
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "12px"
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2px"
          }}
        >
          <span style={{ fontWeight: 600, fontSize: "0.95rem" }}>
            {sender} {icon}
          </span>
          <span style={{ fontSize: "0.75rem", color: "#888" }}>{time}</span>
        </div>
        <div
          style={{
            fontSize: "0.92rem",
            lineHeight: 1.4,
            textAlign: "left"
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
