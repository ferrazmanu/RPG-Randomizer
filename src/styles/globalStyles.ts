import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  #__next{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100dvh;
  }

  body {
    color:#fff;
    background-color: #111;
    font-family: Trebuchet MS, Verdana, Arial, Helvetica, sans-serif
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li, ol{
    list-style: none;
    padding:0;
    margin:0;
  }

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  }

`;

export default GlobalStyle;
