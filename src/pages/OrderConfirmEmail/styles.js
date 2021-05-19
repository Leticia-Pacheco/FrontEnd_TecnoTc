import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
    0%{
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    
    100%{
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;

export const Overlay = styled.body`
    width: 100%;
    height: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    animation: ${modalAnimation} 0.5s;

    width: 800px;
    max-width: 887vw;
    height: 565px;
    max-height: 100vh;

    display: flex;

    flex-direction: column;

    margin-top: 30px;
    /* margin-left: auto;
    margin-right: auto; */

    border-radius: 25px 25px 25px 25px;
    border: solid 1px var(--primaryPurple);

    box-shadow: 2px 2px 35px var(--grey);
`;

export const Header = styled.div`
    width: 100%;
    height: 155px;

    display: flex;

    flex-direction: column;
    align-items: center;
 
    padding-top: 30px;

    background-color: var(--primaryPurple);
    border-radius: 25px 25px 0px 0px;

    > p {
        font-size: 22px;

        color: white;
        font-weight: bold;

        margin-top: -15px;
    }
`;

export const Mensagem = styled.div`
    width: 100%;
    min-height: 40px;

    padding-top: 55px;
    padding-left: 12px;
    padding-right: 12px;

    flex-direction: column;
    align-items: center;
    display: flex;

    text-align: center;

    > p {
        font-size: 20px;
        font-weight: bold;

        color: var(--grey);
    }
`;

export const ImageConfirmEmail = styled.div`
    width: 140px;
    height: 140px;

    margin-top: 30px;
    margin-bottom: 30px;

    > img {
        width: 140px;
        height: 140px;
    }
`;

export const ButtonConfirm = styled.div`
    width: 500px;
    height: 35px;

    border-radius: 10px 10px 10px 10px;
    border: solid 2px var(--primaryPurple);

    line-height: 35px;

    background-color: var(--primaryPurple);

    color: white;
    font-weight: bold;
`;

export const Logo = styled.div`
    width: 150px;
    height: 60px;
    text-align: center;

    margin-bottom: 30px;

    > img {
        width: 150px;
        height: 60px;
    }
`;