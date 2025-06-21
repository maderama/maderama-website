import { useState } from 'react';
import { motion, Transition } from 'framer-motion';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.1em;
  font-size: 4rem;
  font-weight: 300;
  cursor: default;

  span {
    display: inline-block;
  }
`;

type Props = {
  text: string;
};

export const WaveTextRipple = ({ text }: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const transition: Transition = {
    type: 'spring',
    stiffness: 900,
    damping: 20,
  };

  const getAnimationTarget = (i: number) => {
    if (hoveredIndex === null) {
      return {
        y: 0,
        scale: 1,
        opacity: 0.8,
      };
    }

    const distance = Math.abs(i - hoveredIndex);
    const maxDistance = 2;
    const cappedDistance = Math.min(distance, maxDistance);
    const falloff = 1 - cappedDistance / (maxDistance + 0.05);

    return {
      y: -10 * falloff,
      scale: 1 + 0.2 * falloff,
      opacity: 0.8 + 0.2 * falloff,
      fontWeight: 300 + Math.round(300 * falloff),
    };
  };

  return (
    <TextWrapper>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={getAnimationTarget(i)}
          transition={transition}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </TextWrapper>
  );
};
