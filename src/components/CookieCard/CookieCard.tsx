import { CardWrapper, CookiePlaceholder, CookieLabel } from "./CookieCard.styles";

export type Cookie = {
  id: string;
  name: string;
  emoji: string;
  image?: string;
  x: string;
  y: string;
  rotate?: number;
};

type CookieCardProps = {
  cookie: Cookie;
  onClick: (cookie: Cookie) => void;
};

export default function CookieCard({ cookie, onClick }: CookieCardProps) {
  return (
    <CardWrapper
      style={{ left: cookie.x, top: cookie.y }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => onClick(cookie)}
    >
      {cookie.image ? (
        <img
          src={cookie.image}
          alt={cookie.name}
          width={120}
          height={120}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
      ) : (
        <CookiePlaceholder>{cookie.emoji}</CookiePlaceholder>
      )}
      {/* Swap this label for a scanned handwriting <img> when ready */}
      <CookieLabel style={{ transform: `rotate(${cookie.rotate ?? 0}deg)` }}>
        {cookie.name}
      </CookieLabel>
    </CardWrapper>
  );
}
