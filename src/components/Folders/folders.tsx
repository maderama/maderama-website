import { motion } from "framer-motion";
import { styled } from "styled-components";

export const FolderIcon = styled(motion.img)`
  width: 70px;
  height: 70px;
  border-radius: 14px;
  cursor: pointer;
  user-select: none;
`;

export const FolderWrapper = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  font-size: 13px;
  width: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;

const folders = [
  {
    name: "about me",
    icon: "/icons/folder.png",
    x: "130px",
    y: "350px",
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
];

export default function DesktopFolders() {
  return (
    <>
    {folders.map((folder, index) => (
        <FolderWrapper
            key={index}
            style={{ left: folder.x, top: folder.y }}
            onClick={folder.onClick}
        >
            <FolderIcon
            src={folder.icon}
            alt={folder.name}
            />
            <div>{folder.name}</div>
        </FolderWrapper>
    ))}
    </>
  );
}
