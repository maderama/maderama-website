import styled from "styled-components";

export const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  z-index: 3000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;

  &:hover {
    background: #ffffff;
  }
`;
