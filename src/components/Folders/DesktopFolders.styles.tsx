import { motion } from "framer-motion";
import styled from "styled-components";

export const FolderIcon = styled(motion.img)`
  width: 70px;
  height: 70px;
  border-radius: 14px;
  cursor: pointer;
  user-select: none;
`;

export const FolderWrapper = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  font-size: 13px;
  width: 80px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;