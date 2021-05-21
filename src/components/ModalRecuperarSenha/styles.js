import styled, { keyframes } from "styled-components";
import px2vw from "../../utils/px2vw";

const modalAnimation = keyframes`
    
    0% {
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;

    opacity: 1;

    z-index: 9;

    display: table;
    vertical-align:middle;
    display:table-cell;
`;

export const ModalRecuperarSenha = styled.div`
    animation: ${modalAnimation} 0.5s;
    width: 900px;
    height: 600px;

    border: solid 2px var(--primaryPurple);
    background-color: white;

    margin-left: auto;
    margin-right: auto;
    padding: -520px;

    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1024px) {
        flex-wrap: nowrap;
        width: ${px2vw(470)};
    }

    @media (min-width: 768px) {
        flex-wrap: wrap;
        width: ${px2vw(450)};
    }

    @media (min-width: 360px) {
        /* // flex-wrap: nowrap; */
        width: ${px2vw(1000)};
        /* // height: 100%; */
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -25px;

    background-color: var(--primaryPurple);

    > img {
        width: 170px;
        height: 70px;

        margin-left: -300px;
        margin-right: 90px;
    }

    > h1 {
        color: white;

        /* margin-right: -380px; */
    }
`;

export const ImageSenha = styled.div`
    width: 140px;
    height: 140px;

    > img {
        width: 120px;
        height: 120px;
    }
`;

export const MensagemRecuperacaoSenha = styled.div`
    width: 100%;
    min-height: 50px;
    height: auto;
    overflow: hidden;

    margin-bottom: 20px;
    padding-left: 70px;
    padding-right: 70px;
    
    text-align: center;

    > p {
        font-size: 25px;
    }
`;

export const InserirEmail = styled.div`
    width: 90%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 25px;
        margin-right: 15px;
    }

    > input {
        width: 70%;
        height: 40px;

        font-size: 20px;

        border-radius: 5px;
        border: solid 2px var(--primaryPurple);
    }
`;

export const ButtonEnviarLink = styled.div`
    width: 320px;
    height: 40px;
    
    > button {
        width: 320px;
        height: 40px;

        /* background-image: linear-gradient(to right, white, purple); */

        background-color: var(--primaryPurple);
        border: solid 2px var(--primaryPurple);
        border-radius: 5px;

        color: white;
        font-size: 18px;

        :hover{
            cursor: pointer;
            background-color: #312182;
        }
    }
`;