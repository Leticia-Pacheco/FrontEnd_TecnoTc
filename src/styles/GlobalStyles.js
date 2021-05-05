import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px; /*Para não colocar aquelas linhas clarinhas em volta do componente*/
        box-sizing: border-box;
        font-family: arial;
<<<<<<< HEAD
=======

        a {
            color: white;
            text-decoration: none;
        }
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
    }


    /* Paleta de cores */
    :root{
        --primaryPurple: #1F1456;
        --primaryGreenWater: #4ADDA9;
        --grey: #4F4F4F;
        --greyIcons: #B8B8B8;
        --light: #EDF2F4;
<<<<<<< HEAD
        --primary: #EF233C;
        --secondary: #D90429;
=======
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
    }

    /* A scrollbar num todo, tamanho, cores e afins */
    ::-webkit-scrollbar {
        width: 7px;
        background-color: var(--darkGray);
        border-radius: 5px 5px 5px 5px;
    }
    
    /* A parte de trás da barra de rolagem */
    ::-webkit-scrollbar-track {
        background-color: var(--darkGray);
    }

    /* O cursorzinho que, normalmente é cinza escuro. */
    ::-webkit-scrollbar-thumb {
        background-color: var(--primaryPurple);
        border-radius: 5px 5px 5px 5px;
    }

    html, body {
        max-height: 100vh;
        max-width: 100vw;
/* 
        width: 100%;
        height: 100%; */
    }

    span {
        color: var(--primaryGreenWater);
    }
`;
