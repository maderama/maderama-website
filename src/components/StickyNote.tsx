import { useEffect, useRef } from "react";
import styled from "styled-components";
import { createDraggable } from 'animejs';

const Note = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff59d;
  border-radius: 0; /* Optional: remove rounded corners for full fit */
  padding: 32px;
  font-family: "Noteworthy", "Marker Felt", cursive;
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-wrap;
  box-shadow: none;
  box-sizing: border-box;
  cursor: grab;
`;

export const StickyNote = () => {
  const noteRef = useRef(null);

  useEffect(() => {
    if (noteRef.current) {
      createDraggable(noteRef.current, {
        container: '#desktop-container', // optional boundary container
        releaseEase: 'easeOutElastic(1, .6)', // optional bounce
        releaseContainerFriction: 0.2, // optional sliding friction
        releaseMass: 0.5 // optional "weight"
      });
    }
  }, []);

  return (
    <Note ref={noteRef}>
      {"\n• Build cool shit, break nothing (maybe) 🛠️🚫"}
      {"\n• Go to the gym 💪😤"}
      {"\n• Finish one side project without crying 💻😭"}
      {"\n• Champion good code and good vibes ✅🌈"}
      {"\n• Book the trip instead of overthinking it ✈️🧳"}
      {"\n• Be rich enough to buy my cat a house 🐱💰🏡"}
    </Note>
  );
};
