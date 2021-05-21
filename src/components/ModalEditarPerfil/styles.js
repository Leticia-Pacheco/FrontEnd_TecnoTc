import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9;

    background-color: #333C;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalEditarPerfil = styled.div`
    width: 950px;
    min-height: 250px;
    max-height: calc(100vh - 20px); /*Para calcular uma boa altura e que não fique tão grande nem tão pequeno*/

    z-index: 19;

    overflow-y: auto;

    background-color: white;
    box-shadow: 0px 0px 10px black;
    border-radius: 4px;

    position: absolute;
`;

export const Header = styled.div`
    width: 100%;
    height: 130px;

    display: flex;

    padding-top: 5px;
    padding-left: 30px;
    padding-right: 30px;
    
    background-image: linear-gradient(to left, var(--primaryPurple), #38288C, var(--primaryPurple));

    > h3 {
        font-size: 20px;
        margin-top: 50px;
        margin-left: 200px;

        color: white;
    }
`;

export const ImagemUsuario = styled.div`
    width: 120px;
    min-height: 120px;
    height: auto;
    overflow: hidden;

    display: flex;

    > img {
        width: 120px;
        height: 120px;

        border-radius: 50%;
    }
`;

export const EditarImagemUsuario = styled.div`
    width: 100%;
    height: 25px;

    margin-left: -120px;

    align-self: flex-end;

    input[type="file"] {
        display: none;
    }
    label {
        width: 100%;
        height: 25px;

        padding: 4px;
        display: block;
        cursor: pointer;
        
        text-align: center;
        font-size: 15px;
        font-weight: bold;

        border-radius: 5px;
        color: white;
        background-color: var(--primaryGreenWater);
    }
`;

export const Logo = styled.div`
    width: 130px;
    height: 50px;

    margin-top: 35px;
    margin-left: 200px;

    > img {
        width: 130px;
        height: 50px;
    }
`;

export const EditarDados = styled.div`
    width: 100%;
    min-height: 500px;
    height: auto;
    overflow: hidden;

    padding: 30px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* word-wrap:  normal; */
    /* flex-direction: row; */

    > button {
        width: 220px;
        height: 30px;

        margin-top: 25px;
        border-radius: 5px;

        background-color: var(--primaryGreenWater);
        border: solid 2px var(--primaryGreenWater);

        color: white;
        font-weight: bold;

        font-size: 18px;

        :hover {
            cursor: pointer;
        }
    }
`;

export const ComponentEditarDados = styled.div`
    min-width: 380px;
    width: auto;
    overflow: hidden;
    height: 70px;

    margin: 15px;
    display: flex;
    flex-direction: column;

    > p {
        font-size: 18px;
        font-weight: bold;

        color: var(--primaryPurple);
    }

    > input {
        height: 35px;

        padding-left: 5px;
        font-size: 15px;

        border-radius: 4px;
        border: solid 2px var(--primaryPurple);
    }

    > span {
        font-size: 12px;
        color: var(--primaryPurple);

        font-weight: bold;

        align-self: flex-end;
    }
`;