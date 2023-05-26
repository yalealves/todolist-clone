import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        width: 100%;
        height: 100vh;
        background-color: #1A1A1A;
    }

`