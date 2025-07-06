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
  gap: 0.0625rem; /* 1px */
  padding: 0.5rem 1.25rem;

  border-radius: 1rem; /* 16px */
  background: rgba(157, 157, 157, 0.4);
  backdrop-filter: blur(0.75rem) saturate(180%); /* 12px */
  -webkit-backdrop-filter: blur(0.75rem) saturate(180%);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.25); /* 12px 24px */
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const AppIcon = styled(motion.img)`
  width: 3.5rem;  /* 56px */
  height: 3.5rem; /* 56px */
  border-radius: 0.875rem; /* 14px */
  cursor: pointer;
  user-select: none;
  margin-bottom: 0.2rem;
`;

const DockDivider = styled.div`
  width: 0.0625rem; /* 1px */
  height: 3.5rem; /* match icon height */
  background: rgba(0, 0, 0, 0.3);
  margin: 0 1rem;
  border-radius: 999px;
`;

const Dot = styled.div`
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.25rem; 
  height: 0.25rem;
  border-radius: 50%;
  background: black;
`;

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const apps = [
  { name: "Finder", icon: "/icons/finder.png" },
  { name: "Chrome", icon: "/icons/google_chrome.png", active: true },
  { name: "Notes", icon: "/icons/notes.png" },
  { name: "Contacts", icon: "/icons/contacts.png" },
  { name: "Warp", icon: "/icons/warp.png", active: true },
  { name: "VSCode", icon: "/icons/visual_studio_code.png", active: true },
  { name: "Intellij", icon: "/icons/intellij_idea.png" },
  { name: "Bruno", icon: "/icons/bruno.png" },
  { name: "Slack", icon: "/icons/slack.png", active: true },
  { name: "Spotify", icon: "/icons/spotify.png", active: true },
  { name: "Notion", icon: "/icons/notion.png" },
  { name: "Settings", icon: "/icons/settings.png" },

  { divider: true },

  { name: "Stickies", icon: "/icons/stickies.png", active: true },
  { name: "Messages", icon: "/icons/messages.png", active: true },

  { divider: true },

  { name: "Bin", icon: "/icons/bin.png" },
];

export default function MacDock() {
  return (
    <DockContainer>
    {apps.map((app, index) =>
    app.divider ? (
    <DockDivider key={`divider-${index}`} />
    ) : (
    <AppWrapper key={app.name}>
    <AppIcon
        src={app.icon}
        alt={app.name}
        whileHover={{
        scale: 1.2,
        y: "-0.625rem",
        transition: { type: "spring", stiffness: 200, damping: 15 }
        }}
        drag={false}
    />
    {app.active && <Dot />}
    </AppWrapper>
    )
    )}
    </DockContainer>
  );
}
