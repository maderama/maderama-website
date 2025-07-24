import styled from "styled-components";
import { motion } from "framer-motion";

export const ReadMeWindow = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 380px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  background: #f2f2f2;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  position: relative;
`;

export const ModalTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 500;
  font-size: 14px;
  color: #333;
  pointer-events: none;
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:nth-child(1) {
    background: #ff5f56; // red
  }
  &:nth-child(2) {
    background: #ffbd2e; // yellow
  }
  &:nth-child(3) {
    background: #27c93f; // green
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 16px;
  background: white;
  overflow: auto;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const StyledPre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: left;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 15px;
  font-family: Menlo, Monaco, Consolas, monospace;
`;

export const PlaylistWindow = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 1000;
`;

export const IconWindow = styled(motion.div)`
  position: absolute;
  width: 270px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 900;
`;

export const IconContent = styled.div`
  flex: 1;
  padding: 0rem;
  background: white;
  overflow: auto;
`;

export const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 800;
`;

export const GutsWindow = styled(motion.div)`
  position: absolute;
  width: 250px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  z-index: 900;
`;
