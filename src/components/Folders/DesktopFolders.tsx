import { OpenWindowsState } from "src/types/OpenWindows";
import { FolderWrapper, FolderIcon } from "./DesktopFolders.styles";

type Folder = {
  name: string;
  icon: string;
  id?: string;
  // scatter position: offset in px from the centre of the viewport
  dx: number;
  dy: number;
  onClick?: () => void;
};

type DesktopFoldersProps = {
  setOpenWindows: React.Dispatch<React.SetStateAction<OpenWindowsState>>;
  onOpenHobbies: () => void;
};

// Folders sit around the centre title (upright). Offsets are kept clear of the
// top-left sticky note, the centre title, the bottom dock, and each other.
const folders: Folder[] = [
  { name: "hobbies", icon: "/icons/folder.png", id: "hobbies", dx: 160, dy: -210 },
  { name: "project 1", icon: "/icons/folder.png", dx: 410, dy: -150 },
  { name: "thesis", icon: "/icons/folder.png", dx: 450, dy: 40 },
  { name: "don't look", icon: "/icons/bin.png", dx: 370, dy: 200 },
  {
    name: "resume.pdf",
    icon: "/icons/pdf_document.png",
    dx: -250,
    dy: 200,
    onClick: () => window.open("/documents/resume.pdf", "_blank"),
  },
  { name: "about me", icon: "/icons/folder.png", id: "about", dx: -450, dy: 40 },
];

export default function DesktopFolders({
  setOpenWindows,
  onOpenHobbies,
}: DesktopFoldersProps) {
  const resolveClick = (folder: Folder) =>
    folder.id === "about"
      ? () =>
          setOpenWindows((prev) => {
            const isOpen = prev.aboutReadMe;
            return {
              ...prev,
              aboutReadMe: !isOpen,
              aboutPlaylist: !isOpen,
              aboutIcon: !isOpen,
              aboutGuts: !isOpen,
            };
          })
      : folder.id === "hobbies"
      ? onOpenHobbies
      : folder.onClick;

  return (
    <>
      {folders.map((folder) => (
        <FolderWrapper
          key={folder.name}
          style={{
            left: `calc(50% + ${folder.dx}px)`,
            top: `calc(50% + ${folder.dy}px)`,
            transform: "translate(-50%, -50%)",
          }}
          onClick={resolveClick(folder)}
        >
          <FolderIcon src={folder.icon} alt={folder.name} />
          <div>{folder.name}</div>
        </FolderWrapper>
      ))}
    </>
  );
}
