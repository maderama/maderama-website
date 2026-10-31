import styled from "styled-components";
import { motion } from "framer-motion";

export const NotesWindow = styled(motion.div)`
  position: absolute;
  width: 380px;
  height: 480px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 2000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

export const NotesBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 20px 20px 20px;
  background-color: #fef9c3;
  background-image: linear-gradient(
      to right,
      transparent 44px,
      #f4a9a0 44px,
      #f4a9a0 45px,
      transparent 45px
    ),
    repeating-linear-gradient(
      transparent,
      transparent 27px,
      rgba(0, 0, 0, 0.07) 27px,
      rgba(0, 0, 0, 0.07) 28px
    );
`;

export const NotesCookieName = styled.h2`
  font-family: "Caveat", cursive;
  font-size: 26px;
  color: #3d2314;
  margin: 8px 0 20px 52px;
  line-height: 28px;
  font-weight: 600;
`;

export const NotesSection = styled.div`
  margin: 0 0 8px 52px;
`;

export const NotesText = styled.p`
  font-family: "Caveat", cursive;
  font-size: 19px;
  color: #444;
  margin: 0;
  line-height: 28px;
`;
