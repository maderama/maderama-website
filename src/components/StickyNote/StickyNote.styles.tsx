import { styled } from "styled-components";

export const Note = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4;
  background: #fff9b0;
  border-radius: 18px;
  padding: 12px 16px;
  width: 320px;
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
`;
