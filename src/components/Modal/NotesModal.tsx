import { ModalHeader, Dot, ModalTitle } from "./DesktopModal.styles";
import {
  NotesWindow,
  NotesBody,
  NotesCookieName,
  NotesSection,
  NotesText,
} from "./NotesModal.styles";
import type { Cookie } from "../CookieCard/CookieCard";

type NotesModalProps = {
  cookie: Cookie;
  onClose: () => void;
};

export default function NotesModal({ cookie, onClose }: NotesModalProps) {
  return (
    <NotesWindow drag dragMomentum={false} initial={{ x: 0, y: -40 }}>
      <ModalHeader>
        <Dot onClick={onClose} />
        <Dot />
        <Dot />
        <ModalTitle>notes</ModalTitle>
      </ModalHeader>
      <NotesBody>
        <NotesCookieName>{cookie.name} {cookie.emoji}</NotesCookieName>
        <NotesSection>
          <NotesText>ingredients:</NotesText>
          <NotesText>- (add your recipe here)</NotesText>
        </NotesSection>
        <NotesSection>
          <NotesText>notes:</NotesText>
          <NotesText>- (your little story about this one)</NotesText>
        </NotesSection>
      </NotesBody>
    </NotesWindow>
  );
}
