import { motion } from "framer-motion";
import { styled } from "styled-components";

export const DockContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 0.0625rem; /* 1px */
  padding: 0.5rem 1.25rem;

  border-radius: 1rem; /* 16px */
  background: rgba(157, 157, 157, 0.4);
  backdrop-filter: blur(0.75rem) saturate(180%); /* 12px */
  -webkit-backdrop-filter: blur(0.75rem) saturate(180%);
  box-shadow: 0 0.75rem 1.5rem rgba(0, 0, 0, 0.25); /* 12px 24px */
  z-index: 1000;
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const AppIcon = styled(motion.img)`
  width: 3.5rem;  /* 56px */
  height: 3.5rem; /* 56px */
  border-radius: 0.875rem; /* 14px */
  cursor: pointer;
  user-select: none;
  margin-bottom: 0.2rem;
`;

export const DockDivider = styled.div`
  width: 0.0625rem; /* 1px */
  height: 3.5rem; /* match icon height */
  background: rgba(0, 0, 0, 0.3);
  margin: 0 1rem;
  border-radius: 999px;
`;

export const Dot = styled.div`
  position: absolute;
  bottom: -0.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0.25rem; 
  height: 0.25rem;
  border-radius: 50%;
  background: black;
`;

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;