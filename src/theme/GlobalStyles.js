import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import fontFaces from './fonts/styles';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ${fontFaces}
  
  :root {
    ${colors}

    --font-primary: "Inter", sans-serif;
    --layout-width: 1100px;
    --spacer: 32px;
    --radius: 10px;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-primary);
    ${({ theme }) => theme.typography.body};
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    min-height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--colors-darkBlue);
    background-color: var(--colors-linkWater);
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export default GlobalStyles;
