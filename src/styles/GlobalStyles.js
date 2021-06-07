import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: 0px; /*Para não colocar aquelas linhas clarinhas em volta do componente*/
        box-sizing: border-box;
        font-family: arial;
        list-style: none;

        a {
            color: white;
            text-decoration: none;
        }
    }


    /* Paleta de cores */
    :root{
        --primaryPurple: #1F1456;
        --primaryGreenWater: #4ADDA9;
        --grey: #4F4F4F;
        --greySecondary: #B8B8B8;
        --greyTerciary: #DEE4E4;
        --greyQuaternary: #F1F0F0;
        --light: #EDF2F4;

        // font-size: ${px2vw(24)};

        @media (min-width: 768px) {
            font-size: ${px2vw(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${px2vw(16)};
        }
    }

    /* A scrollbar num todo, tamanho, cores e afins */
    ::-webkit-scrollbar {
        width: 7px;
        background-color: var(--darkGray);
        border-radius: 5px 5px 5px 5px;
    }
    
    /* A parte de trás da barra de rolagem */
    ::-webkit-scrollbar-track {
        background-color: var(--greyQuaternary);
    }

    /* O cursorzinho que, normalmente é cinza escuro. */
    ::-webkit-scrollbar-thumb {
        background-color: var(--greySecondary);
        border-radius: 5px 5px 5px 5px;
    }

    html, body {
        max-height: 100vh;
        max-width: 100vw;
 
        width: 100%;
        height: 100%;
    }

    span {
        color: var(--primaryGreenWater);
    }
`;