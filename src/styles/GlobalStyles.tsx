import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  :root{
    --primaryColor: #35a79c;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size:  62.5%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;  
  }

`;

export default GlobalStyles;
