import { motion, AnimatePresence } from "framer-motion";
import { AppIcon, AppWrapper, DockContainer, DockDivider, Dot } from "./MacDock.styles";
import { useWindowWidth } from "../../hooks/useMediaQuery";

type DockApp = { name: string; icon: string; active?: boolean };
type DockDividerItem = { divider: true };
type DockItem = DockApp | DockDividerItem;

const isDivider = (item: DockItem): item is DockDividerItem =>
  (item as DockDividerItem).divider === true;

// Order matters: the dock collapses from the RIGHT, so left-most apps survive
// longest. Drop/reorder entries here to change priority.
const apps: DockItem[] = [
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

const PER_ITEM = 58; // approx px per dock slot (icon + gap)
const CHROME = 80; // dock padding + breathing room
const MIN_ITEMS = 6;

export default function MacDock() {
  const width = useWindowWidth();

  // How many slots fit → always drop from the right end, in order.
  const maxFit = Math.floor((width - CHROME) / PER_ITEM);
  const n = Math.max(MIN_ITEMS, Math.min(apps.length, maxFit));
  let visible = apps.slice(0, n);
  // Don't leave a dangling divider at the right edge.
  if (visible.length && isDivider(visible[visible.length - 1])) {
    visible = visible.slice(0, -1);
  }

  return (
    <DockContainer>
      <AnimatePresence initial={false}>
        {visible.map((item, index) =>
          isDivider(item) ? (
            <motion.div key={`divider-${index}`} layout>
              <DockDivider />
            </motion.div>
          ) : (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              <AppWrapper>
                <AppIcon
                  src={item.icon}
                  alt={item.name}
                  whileHover={{
                    scale: 1.2,
                    y: "-0.625rem",
                    transition: { type: "spring", stiffness: 200, damping: 15 },
                  }}
                  drag={false}
                />
                {item.active && <Dot />}
              </AppWrapper>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </DockContainer>
  );
}
