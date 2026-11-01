import styled from "styled-components";

export const StageViewport = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
`;

// Fixed design canvas. `zoom` is set inline from JS so the whole desktop scales
// to fit while keeping pointer/drag coordinates consistent (unlike transform).
export const Stage = styled.div`
  position: relative;
  width: 1440px;
  height: 900px;
  flex: none;
`;
