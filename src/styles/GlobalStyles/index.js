import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.backgroundBody};
    background: ${(props) => props.theme.bodyBackground};
    font-family: 'Montserrat', sans-serif;
    color: ${(props) => props.theme.activeFontColor};
  }

  input::placeholder,
  textarea::placeholder {
    font-family: 'Montserrat', sans-serif;
    color: #AAA;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  a,
  nav button {
    text-decoration: none;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.fontColor};
    transition: 0.4s;
    font-size: 1em;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }

  a:hover,
  nav button:hover {
    color: #bbb;
  }
`;

export { GlobalStyle }
