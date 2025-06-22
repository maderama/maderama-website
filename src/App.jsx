import { useEffect } from "react";
import { GlobalStyles } from "./__styles__/GlobalStyles"
import { WaveTextRipple } from "./components/WaveTextRipple"
import { toast } from "sonner"

function IOSMessageToast({ sender, message, avatarUrl, icon, time }) {
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
  )
}

function SystemStyleToast({ title, message, iconUrl, time }) {
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

function App() {
  useEffect(() => {
    toast.custom(() => (
    <IOSMessageToast
      sender="Mum"
      icon="💖"
      message="You made this?? You should tell that recruiter lady! 💼😘"
      avatarUrl="/mum.png"
      time="just now"
    />
  ), { duration: Infinity })

  toast.custom(() => (
    <SystemStyleToast
      title="Github"
      message="All green. We’re not sure how, but we’re not asking questions."
      iconUrl="/github_logo.png"
      time="just now"
    />
  ), { duration: Infinity })

  toast.custom(() => (
    <SystemStyleToast
      title="Boss"
      message="You're on fire today 🔥🔥 Thanks for pushing that out so fast!"
      iconUrl="/slack_icon.png"
      time="just now"
    />
  ), { duration: Infinity })
  }, [])

  return (
    <>
    <GlobalStyles/>
      <h1>welcome to my</h1>
      <WaveTextRipple text="portfolio." />
    </>
  )
}

export default App
