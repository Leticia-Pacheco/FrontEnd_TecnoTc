import styled from "styled-components";

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;

    opacity: 1;

    z-index: 9;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow-x: hidden;
`;

export const Container = styled.div`
    width: 870px;
    height: 650px;

    box-shadow: 2px 2px 5px black;

    > button {
        width: 120px;
        height: 25px;

        font-size: 16px;
        font-weight: bold;

        margin-top: 15px;

        border-radius: 4px;
        border: none;
        background-color: var(--primaryGreenWater);
        color: white;
        
        :hover {
            cursor: pointer;
        }
    }
`;

export const Header = styled.header`
    width: 100%;
    height: 280px;
    display: flex;

    padding-top: 20px;
    padding-left: 15px;
    padding-right: 20px;

    background-color: var(--primaryPurple);

    > img {
        width: 90px;
        height: 70px;

        margin-right: 20px;
    }

    > h1 {
        margin-top: 20px;

        color: white;
    }
`;

export const Informacoes = styled.div`
    width: 100%;
    min-height: 200px;
    height: auto;
    overflow: hidden;

    display: flex;
    margin-top: -130px;
`;

export const ContainersCheck = styled.div`
    width: 400px;
    height: 420px;
    
    display: flex;
    // align-items: center;
    // justify-content: center;
    flex-direction: column;

    margin-left: 20px;
    margin-right: 20px;
    padding: 15px;
    
    border-radius: 4px 4px 0px 0px;
    border-bottom: solid 5px var(--primaryPurple);
    background-color: #F7F7F7;

    > h3 {
        width: 100%;

        margin-bottom: 30px;
        text-align: center;

        color: var(--primaryPurple);

        > img {
            width: 18px;
            height: 18px;

            margin-right: 10px;
        }
    }

    > ul li {
        width: 100%;

        margin-bottom: 4px;
        display: flex;

        > p {
            font-size: 18px;
        }
        > img {
            width: 20px;
            height: 18px;

            margin-right: 5px;
        }

        #ImageTarefasEmEspera {
            margin-right: -85px;
            margin-left: 90px;
        }

        > h3 {
            width: 100%;
    
            margin-bottom: 30px;
            text-align: center;
    
            color: var(--primaryPurple);
        }

        > input {
            margin-top: 4px;
            margin-right: 8px;
        }

        input[type='radio']:after {
            width: 11px;
            height: 11px;
            border-radius: 15px;
            position: relative;
            background-color: #d1d3d1;
            content: '';
            display: inline-block;
            visibility: visible;
            border: 2px solid white;
        }
    
        input[type='radio']:checked:after {
            width: 11px;
            height: 11px;
            border-radius: 15px;
            top: -2px;
            left: -1px;
            position: relative;
            background-color: var(--primaryPurple);
            content: '';
            display: inline-block;
            visibility: visible;
            border: 2px solid white;
        }
    }
`;