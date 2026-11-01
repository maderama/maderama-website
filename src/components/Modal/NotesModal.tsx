import { ModalHeader, Dot, ModalTitle } from "./DesktopModal.styles";
import { NotesWindow, NotesBody } from "./NotesModal.styles";
import NotesContent from "./NotesContent";
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
        <NotesContent cookie={cookie} />
      </NotesBody>
    </NotesWindow>
  );
}
