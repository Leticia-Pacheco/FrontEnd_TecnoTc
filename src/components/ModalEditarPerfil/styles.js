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
    min-width: 800px;
    min-height: 620px;
    max-height: calc(100vh - 20px); /*Para calcular uma boa altura e que não fique tão grande nem tão pequeno*/
    z-index: 19;

    position: absolute;

    overflow-y: auto;

    background-color: yellow;
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
        margin-top: 50px;
        margin-left: 150px;

        color: white;
    }
`;

export const ImagemUsuario = styled.div`
    max-width: 130px;
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
    width: 40px;
    height: 40px;

    margin-left: -40px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    background-color: var(--primaryGreenWater);

    > img {
        width: 25px;
        height: 25px;
    }
`;

export const Logo = styled.div`
    width: 130px;
    height: 50px;

    margin-top: 35px;
    margin-left: 155px;

    > img {
        width: 130px;
        height: 50px;
    }
`;

export const EditarDados = styled.div`
    
`;