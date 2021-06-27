import styled from "styled-components";

export const Container = styled.div`
    width: 900px;
    min-height: 900px;
    height: auto;
    overflow: hidden;

    background-color: var(--greyTerciary);
    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: center;

    border: solid 2px var(--primaryPurple);
`;

export const Header = styled.header`
    width: 100%;
    height: 400px;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--primaryPurple);

    padding-top: 20px;
`;

export const ContHeader = styled.div`
    width: 80%;
    min-height: 150px;
    height: auto;
    overflow: hidden;
    
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > p {
        font-size: 25px;
        font-weight: bold;

        color: white;

        margin: 30px;
    }

    > span {
        font-size: 18px;
    }
`;

export const Logo = styled.div`
    width: 200px;
    height: 80px;

    > img {
        width: 200px;
        height: 80px;
    }
`;

export const ContainerRecepcao = styled.div`
    width: 100%;
    height: 300px;

    background-color: #312182;

    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    > p {
        font-size: 25px;
        font-weight: bold;
        color: white;
    }

    > span {
        font-size: 25px;
        font-family: 'Open Sans Condensed';
    }
`;

export const ImageRecSenha = styled.div`
    width: 150px;
    height: 150px;
    
    margin-bottom: 40px;

    > img {
        width: 150px;
        height: 150px;
    }
`;

export const Mensagem = styled.div`
    width: 100%;
    min-height: 400px;
    height: auto;
    overflow: hidden;

    background-color: white;

    padding: 30px;
    text-align: justify;
    align-items: center;
    display: flex;
    flex-direction: column;

    > h3 {
        margin-bottom: 20px;
    }

    > p {
        margin-bottom: 20px;
    }

    > button {
        width: 220px;
        height: 30px;

        margin-top: 40px;

        font-size: 18px;
        color: white;
        font-weight: bold;

        background-color: var(--primaryPurple);
        border-radius: 5px 5px 5px 5px;
        border: solid 2px var(--primaryPurple);

        :hover {
            cursor: pointer;
            background-color: #312182;
        }
    }
`;