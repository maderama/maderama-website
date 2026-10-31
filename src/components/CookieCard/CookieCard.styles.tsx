import { motion } from "framer-motion";
import styled from "styled-components";

export const CardWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  z-index: 100;
`;

export const CookiePlaceholder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, #e8b07a, #c4784a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
`;

export const CookieLabel = styled.span`
  font-family: "Caveat", cursive;
  font-size: 18px;
  margin-top: 8px;
  color: #3d2314;
  text-align: center;
  max-width: 140px;
  line-height: 1.2;
`;
