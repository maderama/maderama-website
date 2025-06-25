import { useEffect } from "react";
import { GlobalStyles } from "./__styles__/GlobalStyles"
import { WaveTextRipple } from "./components/WaveTextRipple"
import { toast } from "sonner"
import styled from "styled-components";
import IOSMessageToast from "./components/Messages/IOSMessage";
import SystemStyleToast from "./components/Messages/SystemMessage";
import { StickyNote } from "./components/StickyNote/StickyNote";

function App() {
  useEffect(() => {
    toast.custom(() => (
    <IOSMessageToast
      sender="Mum"
      icon="💖"
      message="You made this?? You should tell that recruiter lady! 💼😘"
      avatarUrl="/mum.png"
      time="16m ago"
    />
  ), { duration: Infinity })

  toast.custom(() => (
    <SystemStyleToast
      title="Github"
      message="All green. We’re not sure how, but we’re not asking questions."
      iconUrl="/github_logo.png"
      time="4m ago"
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

const DesktopContainer = styled.div`
  position: relative;
  width: 18.75rem;
  height: 12.5rem;
`;

  return (
    <>
    <GlobalStyles/>
    <DesktopContainer id="desktop-container">
      <StickyNote />
    </DesktopContainer>
      <h1>welcome to my</h1>
      <WaveTextRipple text="portfolio." />
    </>
  )
}

export default App
