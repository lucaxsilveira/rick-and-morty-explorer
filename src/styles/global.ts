import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    .container {
        max-width: 980px;
        padding: 40px 20px;
        margin: 0 auto;
    }
`;
