import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `

body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;