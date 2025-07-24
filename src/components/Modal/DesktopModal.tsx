import aboutText from "./AboutText";
import { ReadMeWindow, ModalHeader, Dot, ModalContent, PlaylistWindow, ModalTitle, StyledPre, IconWindow, StyledIcon, IconContent, GutsWindow } from "./DesktopModal.styles";

type OpenWindowsState = {
  aboutReadMe: boolean;
  aboutPlaylist: boolean;
  aboutIcon: boolean;
  aboutGuts: boolean;
};

type DesktopModalProps = {
  openWindows: OpenWindowsState;
  setOpenWindows: React.Dispatch<React.SetStateAction<OpenWindowsState>>;
};

export default function DesktopModal({ openWindows, setOpenWindows }: DesktopModalProps) {
  return (
    <>
    {openWindows.aboutReadMe && (
      <ReadMeWindow drag dragMomentum={false} initial={{ x: 150, y: -250 }}>
        <ModalHeader>
          <Dot onClick={() => setOpenWindows(prev => ({ ...prev, aboutReadMe: false }))} />
          <Dot />
          <Dot />
        <ModalTitle>README.txt</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <StyledPre>{aboutText}</StyledPre>
        </ModalContent>
      </ReadMeWindow>
    )}

    {openWindows.aboutPlaylist && (
      <PlaylistWindow drag dragMomentum={false} initial={{ x: 575, y: 50 }}>
        <ModalHeader>
          <Dot onClick={() => setOpenWindows(prev => ({ ...prev, aboutPlaylist: false }))} />
          <Dot />
          <Dot />
        <ModalTitle>vibes</ModalTitle>
        </ModalHeader>
          <iframe
            style={{ borderRadius: 0 }}
            src="https://open.spotify.com/embed/track/2lljt2vIqFChSGcEn319iU?utm_source=generator"
            width="100%"
            height="80%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
      </PlaylistWindow>
    )}

    {openWindows.aboutIcon && (
      <IconWindow drag dragMomentum={false} initial={{ x: 590, y: -450 }}>
        <ModalHeader>
          <Dot onClick={() => setOpenWindows(prev => ({ ...prev, aboutIcon: false }))} />
          <Dot />
          <Dot />
        <ModalTitle>me.jpeg</ModalTitle>
        </ModalHeader>
        <IconContent>
          <StyledIcon src="/images/icon_ic.jpeg" alt="A photo of me" width="100%" height="110%" StyledIcon/>
        </IconContent>
      </IconWindow>
    )}

    {openWindows.aboutGuts && (
      <GutsWindow drag dragMomentum={false} initial={{ x: -10, y: -420 }}>
        <ModalHeader>
          <Dot onClick={() => setOpenWindows(prev => ({ ...prev, aboutGuts: false }))} />
          <Dot />
          <Dot />
        <ModalTitle>guts.jpeg</ModalTitle>
        </ModalHeader>
        <IconContent>
          <StyledIcon src="/images/guts.jpeg" alt="A photo of me" width="100%" height="110%" StyledIcon/>
        </IconContent>
      </GutsWindow>
    )}
    </>
  );
}



