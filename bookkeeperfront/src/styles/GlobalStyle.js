import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    
    :root {
        --primary-color: #222660;
        --primary-color2: rgba(34, 34, 96, 0.6);
        --primary-color3: rgba(34, 34, 96, 0.4);
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;
    }
    
    body {
        font-family: "Nunito", sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, 0.6);
    }
`;
