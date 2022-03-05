import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* variables*/
  :root {
    --body-bg-color: #edf5fc;
    --body-text-color: #0a1128;
    --main-color: #23ce6b;
    --subtitle: #b8c5d6;
    --note: #407076;
  }
  /* reset */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px; /* default to Desktop */
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: var(--body-bg-color);
    -webkit-font-smoothing: antialiased;

  }

  body,
  input,
  textarea,
  button {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    color: var(--body-text-color)
  }

  a {
    text-decoration: none;
    color: var(--body-text-color);
  }

  ul, li, ol{
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
