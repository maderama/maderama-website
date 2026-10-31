import styled from "styled-components";
import { motion } from "framer-motion";

export const FinderWindow = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 560px;
  height: 360px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
`;

export const FinderHeader = styled.div`
  background: #f2f2f2;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  gap: 8px;
  position: relative;
  border-bottom: 1px solid #e0e0e0;
`;

export const FinderTitle = styled.span`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 14px;
  color: #333;
  pointer-events: none;
`;

export const FinderBody = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const FinderSidebar = styled.div`
  width: 150px;
  background: #ececec;
  border-right: 1px solid #e0e0e0;
  padding: 12px 8px;
  font-size: 13px;
  color: #555;
`;

export const SidebarLabel = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  color: #999;
  margin: 8px 6px 4px;
  letter-spacing: 0.3px;
`;

export const SidebarItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px;
  border-radius: 6px;
  color: #333;
  background: ${({ $active }) => ($active ? "#d6d6d6" : "transparent")};
`;

export const FinderMain = styled.div`
  flex: 1;
  padding: 18px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 18px;
  background: white;
`;

export const FileItem = styled(motion.div)`
  width: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  text-align: center;
`;

export const FileEmoji = styled.div`
  font-size: 46px;
  line-height: 1;
`;

export const FileLabel = styled.span`
  font-size: 12px;
  color: #333;
  word-break: break-word;
`;
