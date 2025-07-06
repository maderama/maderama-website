import { styled } from "styled-components";

export const Note = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
  background: #fff9b0;
  border-radius: 1px;
  padding: 16px 16px;
  box-sizing: border-box;
  width: 18.75rem;
  height: 11rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  text-align: left;
  white-space: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  del {
    color: #555;
    text-decoration: line-through;
  }

  strong {
    font-weight: 600;
    font-size: 0.8rem;
  }

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 12px; // adjust to your liking
  width: 100%;
  background: #f7d900;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`;
