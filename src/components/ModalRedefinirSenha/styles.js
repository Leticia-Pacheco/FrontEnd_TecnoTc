import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: var(--grey); */

    opacity: 0.;

    z-index: 9;

    display: table;
    vertical-align:middle;
    display:table-cell;
    align-items: center;
`;

export const ContainerModal = styled.div`
    width: 900px;
    height: 600px;

    background-color: var(--primaryPurple);

    margin-left: auto;
    margin-right: auto;

    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > h1 {
        color: white;
    }
`;

export const Header = styled.div`
    width: 100%;
    min-height: 12px;
    height: auto;
    overflow: hidden;

    padding: 5px;
    margin-top: -35px;

    border-bottom: solid 4px white;

    text-align: center;

    > img {
        width: 170px;
        height: 70px;
    }
`;

export const MensagemUsuario = styled.div`
    width: 100%;
    height: auto;
    min-height: 20px;
    overflow: hidden;
    
    padding-left: 60px;
    padding-right: 60px;

    color: white;
    font-size: 22px;
    text-align: center;
`;

export const InserirNovaSenha = styled.form`
    min-width: 280px;
    width: auto;
    min-height: 50px;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    margin: 15px;

    > p {
        text-align: center;
        color: white;
        margin: 15px 0px;
    }

    > input {
        width: 100%;
        height: 35px;
        border-radius: 5px;
        border: solid 2px white;

        padding: 5px;
        font-size: 14px;
    }
`;

export const ButtonRedefinirSenha = styled.div`
    width: 300px;
    height: 30px;
    margin-top: 20px;
    > button {
        width: 100%;
        height: 30px;

        background-color: var(--primaryGreenWater);
        border: solid 2px var(--primaryGreenWater);
        border-radius: 5px;

        font-size: 17px;
        color: white;
        font-weight: bold;

        :hover {
            cursor: pointer;
            background-color: #1DD091;
        }
    }
`;