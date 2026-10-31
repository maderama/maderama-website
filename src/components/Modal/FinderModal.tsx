import { Dot } from "./DesktopModal.styles";
import {
  FinderWindow,
  FinderHeader,
  FinderTitle,
  FinderBody,
  FinderSidebar,
  SidebarLabel,
  SidebarItem,
  FinderMain,
  FileItem,
  FileEmoji,
  FileLabel,
} from "./FinderModal.styles";

type FinderModalProps = {
  onClose: () => void;
  onOpenCookies: () => void;
};

export default function FinderModal({ onClose, onOpenCookies }: FinderModalProps) {
  return (
    <FinderWindow drag dragMomentum={false}>
      <FinderHeader>
        <Dot onClick={onClose} />
        <Dot />
        <Dot />
        <FinderTitle>hobbies</FinderTitle>
      </FinderHeader>
      <FinderBody>
        <FinderSidebar>
          <SidebarLabel>Favourites</SidebarLabel>
          <SidebarItem $active>🗂 hobbies</SidebarItem>
          <SidebarItem>📁 documents</SidebarItem>
          <SidebarItem>🖥 desktop</SidebarItem>
        </FinderSidebar>
        <FinderMain>
          <FileItem
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={onOpenCookies}
          >
            <FileEmoji>🍪</FileEmoji>
            <FileLabel>cookies.html</FileLabel>
          </FileItem>
        </FinderMain>
      </FinderBody>
    </FinderWindow>
  );
}
