import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: ${theme.color.primary.red};
    --green: ${theme.color.primary.green};
    --blue: ${theme.color.accent.blue};
    --dark-blue: ${theme.color.neutral.darkBlue};
    --grayish-blue: ${theme.color.neutral.grayishBlue};
    --fs-body: ${16 / 16 + "rem"};
    --ff-poppins: ${theme.typography.font.family.poppins};
    --fw-regular: ${theme.typography.font.weight.regular};
    --fw-medium: ${theme.typography.font.weight.medium};
    --fw-semi-bold: ${theme.typography.font.weight.semiBold};
    --fw-bold: ${theme.typography.font.weight.bold};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  body {
    font-size: var(--fs-body);
    font-family: var(--ff-poppins);
  }
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }
  h1 {
    margin-top: 0;
    font-size: 4.209rem;
  }
  h2 {
    font-size: 3.157rem;
  }
  h3 {
    font-size: 2.369rem;
  }
  h4 {
    font-size: 1.777rem;
  }
  h5 {
    font-size: 1.333rem;
  }
  small, .text_small {
    font-size: 0.75rem;
  }
`;

export default GlobalStyle;
