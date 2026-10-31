import { Routes, Route, useNavigate } from "react-router-dom";
import { GlobalStyles } from "./__styles__/GlobalStyles";
import { StickyNote } from "./components/StickyNote/StickyNote";
import MessageToasts from "./components/Messages/MessageToasts";
import { StickyNoteContainer } from "./components/StickyNote/StickyNoteContainer.styles";
import MacDock from "./components/Dock/MacDock";
import ThiccText from "./components/Text/ThiccText";
import { TextContainer } from "./components/Text/TextContainer";
import DesktopFolders from "./components/Folders/DesktopFolders";
import DesktopModal from "./components/Modal/DesktopModal";
import FinderModal from "./components/Modal/FinderModal";
import SparkleCursor from "./components/SparkleCursor/SparkleCursor";
import { useState } from "react";
import { OpenWindowsState } from "./types/OpenWindows";
import CookiesPage from "./pages/CookiesPage";

function DesktopPage() {
  const navigate = useNavigate();
  const [finderOpen, setFinderOpen] = useState(false);
  const [openWindows, setOpenWindows] = useState<OpenWindowsState>({
    aboutReadMe: false,
    aboutPlaylist: false,
    aboutIcon: false,
    aboutGuts: false,
  });
  return (
    <>
      <GlobalStyles />
      <SparkleCursor colors={["#ffd700", "#ffffff", "#fff4b8"]} />
      <MessageToasts />
      <StickyNoteContainer id="desktop-container">
        <StickyNote />
      </StickyNoteContainer>
      <TextContainer>
        <h1>welcome to my</h1>
        <ThiccText text="portfolio." />
      </TextContainer>
      <DesktopFolders
        setOpenWindows={setOpenWindows}
        onOpenHobbies={() => setFinderOpen(true)}
      />
      <DesktopModal openWindows={openWindows} setOpenWindows={setOpenWindows} />
      {finderOpen && (
        <FinderModal
          onClose={() => setFinderOpen(false)}
          onOpenCookies={() => navigate("/cookies")}
        />
      )}
      <MacDock />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<DesktopPage />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </Routes>
  );
}

export default App;
