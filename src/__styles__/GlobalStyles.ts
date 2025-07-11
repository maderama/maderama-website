import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: 'Instrument Serif', serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(0, 0, 0, 0.87);
    background-color: #f8f8f8;
    overflow: hidden;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    background-size: 30px 30px;
    background-image:
        linear-gradient(to right, #dddddd 1px, transparent 1px),
        linear-gradient(to bottom, #dddddd 1px, transparent 1px);
  }

  #root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }
`;
