// MacDock.jsx
import styled from "styled-components";
import { motion } from "framer-motion";

const DockContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1px;
  padding: 0.5rem 1.25rem;

  border-radius: 24px;
  background: rgba(120, 120, 120, 0.3); /* soft grey */
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const AppIcon = styled(motion.img)`
  width: 72px;
  height: 72px;
  border-radius: 18px;
  cursor: pointer;
  user-select: none;
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: black;
  margin-top: 6px;
`;


const apps = [
  { name: "Finder", icon: "/icons/finder.png" },
  { name: "Chrome", icon: "/icons/messages.png" },
  { name: "Spotify", icon: "/icons/spotify.png" },
  { name: "VSCode", icon: "/icons/bin.png" },
  { name: "Notion", icon: "/icons/notion.png" },
];

export default function MacDock() {
  return (
    <DockContainer>
      {apps.map(app => (
        <AppIcon
          key={app.name}
          src={app.icon}
          alt={app.name}
          whileHover={{
            scale: 1.2,
            y: -10,
            transition: { type: "spring", stiffness: 100, damping: 10 }
          }}
          whileTap={{ scale: 0.5 }}
          drag={false}
        />
      ))}
    </DockContainer>
  );
}
