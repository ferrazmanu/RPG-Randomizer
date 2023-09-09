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
    min-height: 80vh;
    padding-bottom: 50px;
  }

  button{
    max-width: 130px;
    width: 100%;
    margin:0 auto;
    height: 30px;
    border: 1px solid #fff;
    font-weight: 600;
    background-color: transparent;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default GlobalStyle;
