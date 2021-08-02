import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    }

    body {
    background: #f5f5f5;
    font-size: 14px;
    color: #333;
    font-family: sans-serif;    
    }

    .App {
        display: grid;
        grid-template-columns: repeat(10, 1fr); 
        grid-template-rows: repeat(18, 2fr);
    }

`;
