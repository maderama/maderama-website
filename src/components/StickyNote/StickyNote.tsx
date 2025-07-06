import { useEffect, useRef } from "react";
import { createDraggable } from 'animejs';
import { Note } from "./StickyNote.styles";
import { styled } from "styled-components";

export const StickyNote = () => {
  const noteRef = useRef(null);

  useEffect(() => {
    if (noteRef.current) {
      createDraggable(noteRef.current, {
        container: '#desktop-container',
        releaseEase: 'easeOutElastic(1, .5)',
        releaseContainerFriction: 0.2,
        releaseMass: 0.5
      });
    }
  }, []);

  return (
    <Note ref={noteRef}>
      <strong>To do:</strong>
      <br />
      <br />
      Testy mc test test test 
      <br />
      <del>Go to the gym</del>
      <br />
      testy mc test face
      <br />
      test test test test test test
      <br />
      swag yolo test test 
    </Note>
  );
};
