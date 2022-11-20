import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #151515;
    color: white;
  }
  
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;

export default CSSReset;