import styled from "styled-components";
import { gridBackground } from "../../__styles__/GlobalStyles";

export const MobileScreen = styled.div`
  position: fixed;
  inset: 0;
  overflow-y: auto;
  /* Opaque fixed layer, so it paints the shared dotted grid itself. */
  ${gridBackground}
`;

export const MobileHeader = styled.header`
  text-align: center;
  padding: 36px 20px 16px;

  h1 {
    font-family: "Instrument Serif", serif;
    font-size: 34px;
    margin: 0;
    color: #222;
  }

  p {
    font-family: "Instrument Serif", serif;
    font-size: 17px;
    color: #777;
    margin: 4px 0 0;
  }
`;
