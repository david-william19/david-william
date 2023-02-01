import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Poppins, 'sans-serif';
        background-color: #ffffff;
        background-image:  radial-gradient(#00000045 1.1px, transparent 1.1px), radial-gradient(#00000045 1.1px, #ffffff 1.1px);
        background-size: 44px 44px;
        background-position: 0 0,22px 22px;
    }
`;
