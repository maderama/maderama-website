import styled from "styled-components";
import { motion } from "framer-motion";
import { AppIcon, AppWrapper, DockContainer, DockDivider, Dot } from "./MacDock.styles";

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
