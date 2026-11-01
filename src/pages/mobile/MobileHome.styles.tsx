import styled from "styled-components";

export const MobileScreen = styled.div`
  position: fixed;
  inset: 0;
  overflow-y: auto;
  background: #f8f8f8;
  background-size: 30px 30px;
  background-image: linear-gradient(to right, #dddddd 1px, transparent 1px),
    linear-gradient(to bottom, #dddddd 1px, transparent 1px);
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
