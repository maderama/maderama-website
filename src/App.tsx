import { styled } from "styled-components";
import { GlobalStyles } from "./__styles__/GlobalStyles";
import { StickyNote } from "./components/StickyNote/StickyNote";
import { WaveTextRipple } from "./components/WaveTextRipple";
import MessageToasts from "./components/Messages/MessageToasts";
import { StickyNoteContainer } from "./components/StickyNote/StickyNoteContainer.styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <MessageToasts />
      <StickyNoteContainer id="desktop-container">
        <StickyNote />
      </StickyNoteContainer>
      <h1>welcome to my</h1>
      <WaveTextRipple text="portfolio." />
    </>
  );
}

export default App;
