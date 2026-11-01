import { styled } from "styled-components";

/* Scatter layout: title pinned dead-centre, folders scattered around it.
   pointer-events are re-enabled on the letters themselves (see ThiccText) so
   the hover/grow works while empty space still passes clicks through. */
export const CentreTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
`;
