import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { cookies } from "../../data/cookies";
import MobileSheet from "../../components/mobile/MobileSheet";
import NotesContent from "../../components/Modal/NotesContent";
import {
  CookiesScreen,
  CookiesHeader,
  HomeLink,
  CarouselArea,
  ArrowButton,
  BigCookie,
  BigCookieCircle,
  BigCookieLabel,
  TapHint,
} from "./MobileCookies.styles";

export default function MobileCookies() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [recipeOpen, setRecipeOpen] = useState(false);
  const cookie = cookies[index];

  const prev = () => setIndex((i) => (i - 1 + cookies.length) % cookies.length);
  const next = () => setIndex((i) => (i + 1) % cookies.length);

  return (
    <CookiesScreen>
      <CookiesHeader>
        <HomeLink onClick={() => navigate("/")} aria-label="Home">
          ←
        </HomeLink>
        <h1>christmas cookies 🎄</h1>
      </CookiesHeader>

      <CarouselArea>
        <ArrowButton onClick={prev} aria-label="Previous cookie">
          ‹
        </ArrowButton>

        <AnimatePresence mode="wait">
          <BigCookie
            key={cookie.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setRecipeOpen(true)}
          >
            <BigCookieCircle>{cookie.emoji}</BigCookieCircle>
            <BigCookieLabel>{cookie.name}</BigCookieLabel>
            <TapHint>tap for the recipe</TapHint>
          </BigCookie>
        </AnimatePresence>

        <ArrowButton onClick={next} aria-label="Next cookie">
          ›
        </ArrowButton>
      </CarouselArea>

      <AnimatePresence>
        {recipeOpen && (
          <MobileSheet
            key="recipe"
            title={cookie.name}
            onClose={() => setRecipeOpen(false)}
          >
            <NotesContent cookie={cookie} />
          </MobileSheet>
        )}
      </AnimatePresence>
    </CookiesScreen>
  );
}
