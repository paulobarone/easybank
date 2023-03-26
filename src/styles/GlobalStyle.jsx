import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --White: hsl(0, 0%, 100%);
    --LightGrayishBlue: hsl(220, 16%, 96%);
    --VeryLightGray: hsl(0, 0%, 98%);
    --GrayishBlue: hsl(233, 8%, 62%);

    --LimeGreen: hsl(136, 65%, 51%);
    --BrightCyan: hsl(192, 70%, 51%);
    --DarkBlue: hsl(233, 26%, 24%);
  }

  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  body, button {  
    /* overflow-x: hidden;  */
    font-size: 18px;
    font-family: 'Public Sans', sans-serif;
    background-color: var(--VeryLightGray);
  }
`;

export default GlobalStyle;