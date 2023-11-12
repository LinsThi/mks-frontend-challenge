import { createGlobalStyle } from "styled-components";

const defaultStyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export default defaultStyleGlobal;
