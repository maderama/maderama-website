// Home-screen app list for the mobile view. Mirrors the desktop folders but
// with explicit tap actions (the desktop keeps its own array with x/y coords).

export type AppAction =
  | { type: "about" }
  | { type: "navigate"; to: string }
  | { type: "url"; href: string }
  | { type: "sheet"; title: string; body: string };

export type AppItem = {
  id: string;
  label: string;
  icon: string;
  action: AppAction;
};

export const apps: AppItem[] = [
  {
    id: "about",
    label: "about me",
    icon: "/icons/folder.png",
    action: { type: "about" },
  },
  {
    id: "resume",
    label: "resume.pdf",
    icon: "/icons/pdf_document.png",
    action: { type: "url", href: "/documents/resume.pdf" },
  },
  {
    id: "hobbies",
    label: "hobbies",
    icon: "/icons/folder.png",
    action: { type: "navigate", to: "/cookies" },
  },
  {
    id: "project1",
    label: "project 1",
    icon: "/icons/folder.png",
    action: {
      type: "sheet",
      title: "project 1",
      body: "Coming soon ✨ — check back later!",
    },
  },
  {
    id: "thesis",
    label: "thesis",
    icon: "/icons/folder.png",
    action: {
      type: "sheet",
      title: "thesis",
      body: "Coming soon ✨ — check back later!",
    },
  },
  {
    id: "bin",
    label: "don't look",
    icon: "/icons/bin.png",
    action: { type: "url", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  },
];
