import styled, { keyframes } from "styled-components";

export const SparkleLayer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 9999;
`;

const pop = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.2) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(45deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -80%) scale(0.3) rotate(120deg);
  }
`;

export const Sparkle = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-size: inherit;
  animation: ${pop} 0.8s ease-out forwards;
  will-change: transform, opacity;
  text-shadow: 0 0 6px currentColor;
`;
