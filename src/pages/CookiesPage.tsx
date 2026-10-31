import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "../__styles__/GlobalStyles";
import MacDock from "../components/Dock/MacDock";
import CookieCard, { Cookie } from "../components/CookieCard/CookieCard";
import NotesModal from "../components/Modal/NotesModal";
import SparkleCursor from "../components/SparkleCursor/SparkleCursor";
import { BackButton } from "./NavStyles";

// Subtle plaid: the same 30px red/green grid, but every 4th line (120px) is
// drawn a bit thicker so the lines oscillate thin/thick like tartan while the
// spacing stays identical to the regular grid.
const GridBackground = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-color: #f8f8f8;
  background-image:
    /* thicker accent lines every 120px (down = red, across = green) */
    linear-gradient(to right, #c0392b 2.5px, transparent 2.5px),
    linear-gradient(to bottom, #2e7d32 2.5px, transparent 2.5px),
    /* regular thin grid every 30px */
    linear-gradient(to right, #c0392b 1px, transparent 1px),
    linear-gradient(to bottom, #2e7d32 1px, transparent 1px);
  background-size: 120px 120px, 120px 120px, 30px 30px, 30px 30px;
`;

// Placeholder cookies — swap emoji for real photos via the `image` field later.
const cookies: Cookie[] = [
  { id: "gingerbread", name: "gingerbread", emoji: "🍪", x: "180px", y: "180px", rotate: -6 },
  { id: "shortbread", name: "shortbread", emoji: "🧈", x: "480px", y: "320px", rotate: 4 },
  { id: "snickerdoodle", name: "snickerdoodle", emoji: "🍥", x: "780px", y: "160px", rotate: -3 },
  { id: "peppermint", name: "peppermint bark", emoji: "🍬", x: "1050px", y: "340px", rotate: 5 },
  { id: "sugar", name: "sugar cookies", emoji: "⭐", x: "640px", y: "520px", rotate: -4 },
];

export default function CookiesPage() {
  const navigate = useNavigate();
  const [activeCookie, setActiveCookie] = useState<Cookie | null>(null);

  return (
    <>
      <GlobalStyles />
      <GridBackground />
      <SparkleCursor colors={["#e63946", "#2e7d32", "#ffd700"]} />
      <BackButton onClick={() => navigate("/")}>←</BackButton>

      {cookies.map((cookie) => (
        <CookieCard key={cookie.id} cookie={cookie} onClick={setActiveCookie} />
      ))}

      {activeCookie && (
        <NotesModal cookie={activeCookie} onClose={() => setActiveCookie(null)} />
      )}

      <MacDock />
    </>
  );
}
