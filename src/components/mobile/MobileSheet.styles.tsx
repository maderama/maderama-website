import styled from "styled-components";
import { motion } from "framer-motion";

export const SheetBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  z-index: 5000;
  display: flex;
  align-items: flex-end;
`;

export const SheetPanel = styled(motion.div)`
  width: 100%;
  /* dvh tracks the real viewport as the mobile URL bar shows/hides, so the
     header + close button never get pushed above the top of the screen.
     vh is kept as a fallback for browsers without dvh support. */
  height: 92vh;
  height: 92dvh;
  max-height: 92dvh;
  padding-top: env(safe-area-inset-top);
  background: #ffffff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid #eee;
  flex: none;
`;

export const SheetTitle = styled.h2`
  margin: 0;
  font-family: "Instrument Serif", serif;
  font-size: 22px;
  color: #222;
`;

export const SheetClose = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: #f0f0f0;
  font-size: 18px;
  line-height: 1;
  color: #444;
  cursor: pointer;
`;

export const SheetBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 18px;
`;
