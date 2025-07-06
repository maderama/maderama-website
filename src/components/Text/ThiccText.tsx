import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  font-size: 8rem;
  font-family: 'Source Serif 4', serif;
  font-style: italic;
  cursor: default;
`;

type ThiccTextProps = {
  text: string;
};

export default function ThiccText({ text }: ThiccTextProps) {
  return (
    <Wrapper>
      {text.split("").map((char, index) => (
        <Letter
          key={index}
          initial={{ fontVariationSettings: '"wght" 450' }}
          animate={{ fontVariationSettings: '"wght" 450' }}
          whileHover={{
            fontVariationSettings: '"wght" 900',
            transition: { duration: 0.275 },
          }}
        >
          {char}
        </Letter>
      ))}
    </Wrapper>
  );
}
