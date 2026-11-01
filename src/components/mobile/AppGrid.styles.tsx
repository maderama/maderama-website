import styled from "styled-components";
import { motion } from "framer-motion";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px 12px;
  padding: 8px 20px 40px;
`;

export const AppTile = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

export const AppTileIcon = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  user-select: none;
  -webkit-user-drag: none;
`;

export const AppTileLabel = styled.span`
  font-size: 13px;
  color: #222;
  text-align: center;
  line-height: 1.2;
`;
