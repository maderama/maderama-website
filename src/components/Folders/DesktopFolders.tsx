import { OpenWindowsState } from "src/types/OpenWindows";
import { FolderWrapper, FolderIcon } from "./DesktopFolders.styles";


type DesktopFoldersProps = {
  setOpenWindows: React.Dispatch<React.SetStateAction<OpenWindowsState>>;
  onOpenHobbies: () => void;
};

const folders = [
  {
    name: "about me",
    icon: "/icons/folder.png",
    x: "130px",
    y: "350px",
    id: "about"
  },
{
    name: "resume.pdf",
    icon: "/icons/pdf_document.png",
    x: "400px",
    y: "500px",
    onClick: () => window.open("/documents/resume.pdf", "_blank"),
  },
  {
    name: "project 1",
    icon: "/icons/folder.png",
    x: "1150px",
    y: "200px",
  },
  {
    name: "thesis",
    icon: "/icons/folder.png",
    x: "1300px",
    y: "350px",
  },
  {
    name: "don't look",
    icon: "/icons/bin.png",
    x: "1200px",
    y: "500px",
  },
  {
    name: "hobbies",
    icon: "/icons/folder.png",
    x: "130px",
    y: "180px",
    id: "hobbies",
  },
];

export default function DesktopFolders({ setOpenWindows, onOpenHobbies }: DesktopFoldersProps) {
  return (
    <>
      {folders.map((folder, index) => {
        const handleClick =
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
          <FolderWrapper
            key={index}
            style={{ left: folder.x, top: folder.y }}
            onClick={handleClick}
          >
            <FolderIcon src={folder.icon} alt={folder.name} />
            <div>{folder.name}</div>
          </FolderWrapper>
        );
      })}
    </>
  );
}
