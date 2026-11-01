import { NotesCookieName, NotesSection, NotesText } from "./NotesModal.styles";
import type { Cookie } from "../CookieCard/CookieCard";

// Shared notes body, used by both the draggable desktop NotesModal and the
// mobile notes sheet.
export default function NotesContent({ cookie }: { cookie: Cookie }) {
  return (
    <>
      <NotesCookieName>
        {cookie.name} {cookie.emoji}
      </NotesCookieName>
      <NotesSection>
        <NotesText>ingredients:</NotesText>
        <NotesText>- (add your recipe here)</NotesText>
      </NotesSection>
      <NotesSection>
        <NotesText>notes:</NotesText>
        <NotesText>- (your little story about this one)</NotesText>
      </NotesSection>
    </>
  );
}
