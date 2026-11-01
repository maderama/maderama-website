import styled from "styled-components";
import { motion } from "framer-motion";

export const CookiesScreen = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f8f8f8;
  background-size: 30px 30px;
  background-image: linear-gradient(to right, #c0392b 1px, transparent 1px),
    linear-gradient(to bottom, #2e7d32 1px, transparent 1px);
`;

export const CookiesHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 18px 8px;
  flex: none;

  h1 {
    font-family: "Instrument Serif", serif;
    font-size: 28px;
    margin: 0;
    color: #222;
  }
`;

export const HomeLink = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  cursor: pointer;
  flex: none;
`;

export const CarouselArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

export const ArrowButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.18);
  font-size: 30px;
  line-height: 1;
  color: #333;
  cursor: pointer;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BigCookie = styled(motion.button)`
  flex: 1;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

export const BigCookieCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #e8b07a, #c4784a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 92px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
`;

export const BigCookieLabel = styled.span`
  font-family: "Caveat", cursive;
  font-size: 32px;
  color: #3d2314;
  text-align: center;
  line-height: 1.1;
`;

export const TapHint = styled.span`
  font-family: "Instrument Serif", serif;
  font-size: 15px;
  color: #777;
`;
