import { styled } from "styled-components";
import { GlobalStyles } from "./__styles__/GlobalStyles";
import { StickyNote } from "./components/StickyNote/StickyNote";
import MessageToasts from "./components/Messages/MessageToasts";
import { StickyNoteContainer } from "./components/StickyNote/StickyNoteContainer.styles";
import MacDock from "./components/Dock/MacDock";
import ThiccText from "./components/Text/ThiccText";
import { TextContainer } from "./components/Text/TextContainer";
import DesktopFolders from "./components/Folders/folders";

function App() {
  return (
    <>
      <GlobalStyles />
      <MessageToasts />
      <StickyNoteContainer id="desktop-container">
        <StickyNote />
      </StickyNoteContainer>
      <TextContainer>
        <h1>welcome to my</h1>
        <ThiccText text="portfolio." />
      </TextContainer>
      <DesktopFolders/>
      <MacDock />
    </>
  );
}

export default App;
