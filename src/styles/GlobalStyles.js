import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  *, button, input {
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    --light-gray: #9E9E9E;
    --medium-gray:  #424242;
    --dark-gray: #212121;
    --white: #fff;
  }
`;
