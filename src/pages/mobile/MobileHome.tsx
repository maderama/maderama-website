import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppItem } from "../../data/apps";
import AppGrid from "../../components/mobile/AppGrid";
import MobileSheet from "../../components/mobile/MobileSheet";
import AboutSheet from "../../components/mobile/AboutSheet";
import { MobileScreen, MobileHeader } from "./MobileHome.styles";

type ActiveSheet =
  | { kind: "about" }
  | { kind: "info"; title: string; body: string }
  | null;

export default function MobileHome() {
  const navigate = useNavigate();
  const [sheet, setSheet] = useState<ActiveSheet>(null);

  const handleOpen = (app: AppItem) => {
    switch (app.action.type) {
      case "about":
        setSheet({ kind: "about" });
        break;
      case "navigate":
        navigate(app.action.to);
        break;
      case "url":
        window.open(app.action.href, "_blank");
        break;
      case "sheet":
        setSheet({ kind: "info", title: app.action.title, body: app.action.body });
        break;
    }
  };

  return (
    <MobileScreen>
      <MobileHeader>
        <h1>madison ✨</h1>
        <p>welcome to my portfolio</p>
      </MobileHeader>

      <AppGrid onOpen={handleOpen} />

      <AnimatePresence>
        {sheet?.kind === "about" && (
          <AboutSheet key="about" onClose={() => setSheet(null)} />
        )}
        {sheet?.kind === "info" && (
          <MobileSheet key="info" title={sheet.title} onClose={() => setSheet(null)}>
            <p style={{ fontFamily: "'Instrument Serif', serif", fontSize: 18 }}>
              {sheet.body}
            </p>
          </MobileSheet>
        )}
      </AnimatePresence>
    </MobileScreen>
  );
}
