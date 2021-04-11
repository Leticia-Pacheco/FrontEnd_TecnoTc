import styled from "styled-components";

export const Container = styled.div`
    width: 380px;
    max-width: 887vw;
    height: 565px;
    max-height: 100vh;

    display: flex;

    flex-direction: column;

    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;

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

    background-color: var(--primaryPurple);
    border-radius: 25px 25px 0px 0px;

    padding-top: 30px;

    > p {
        Font-size: 22px;

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
        font-size: 17px;
        font-weight: bold;

        color: var(--grey);
    }
`;

export const ImageConfirmEmail = styled.div`
    width: 140px;
    height: 140px;

    margin-top: 15px;
    margin-bottom: 20px;

    > img {
        width: 140px;
        height: 140px;
    }
`;

export const ButtonConfirm = styled.button`
    width: 100%;
    height: 35px;

    border-radius: 10px 10px 10px 10px;
    border: solid 2px var(--primaryPurple);

    background-color: var(--primaryPurple);

    color: white;
    font-weight: bold;
`;