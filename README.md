# Portfolio ✨

A personal portfolio built to look and feel like a macOS desktop. Click folders, read modals, catch the sticky note — it's a website that acts like a mini operating system.

---

## 🌐 Live

[maderama.dev](https://maderama.dev/)

---

## 🛠 Tech Stack

| Tool                                                | Purpose                            |
| --------------------------------------------------- | ---------------------------------- |
| [React 19](https://react.dev/)                      | UI framework                       |
| [Vite 6](https://vitejs.dev/)                       | Build tool & dev server            |
| [TypeScript](https://www.typescriptlang.org/)       | Type safety                        |
| [Styled Components](https://styled-components.com/) | Component-scoped CSS-in-JS styling |
| [Framer Motion](https://www.framer.com/motion/)     | Declarative animations             |
| [Anime.js](https://animejs.com/)                    | Fine-grained JS animations         |
| [Sonner](https://sonner.emilkowal.ski/)             | Toast notifications                |

---

## 🏗 How It's Hosted

Deployed on [Vercel](https://vercel.com/). Vercel auto-detects the Vite config, builds the `dist/` output on every push to `main`, and serves it under the custom domain `maderama.dev` (configured in the Vercel dashboard).

---

## 🚀 Running Locally

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Clone the repo
git clone https://github.com/maderama/maderama-website.git
cd maderama-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The dev server opens automatically in Chrome at `http://localhost:5173`.

Other useful commands:

```bash
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

---

## 📁 File Structure

```
maderama-website/
├── public/
│   ├── icons/          # Icon assets
│   ├── images/         # Image assets
│   └── documents/      # Document files
├── src/
│   ├── main.jsx                  # React entry point
│   ├── App.tsx                   # Root component, manages open window state
│   ├── __styles__/
│   │   └── GlobalStyles.ts       # Global styled-components styles (grid bg, fonts)
│   ├── components/
│   │   ├── Dock/                 # macOS-style bottom dock
│   │   ├── Folders/              # Desktop folder icons
│   │   ├── Modal/                # Modal windows (opened by folders)
│   │   ├── Messages/             # iOS-style message bubbles + toast alerts
│   │   ├── StickyNote/           # Draggable sticky note
│   │   └── Text/                 # Animated welcome text
│   └── types/
│       └── OpenWindows.ts        # TS interface for modal open/close state
├── index.html                    # HTML entry, loads fonts + favicon
├── vite.config.ts                # Vite config (React plugin, auto-opens Chrome)
└── package.json
```

---

## 🎨 What's Inside

The portfolio is designed around a macOS desktop metaphor.
