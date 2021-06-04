import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 850px;
    height: auto;
    overflow: hidden;

    // align-items: center;
    justify-content: center;
    display: flex;

    z-index: -1;
`;

export const Form = styled.form`
    width: 1350px;
    min-height: 800px;
    height: auto;
    overflow: hidden;
    display: flex;

    padding-left: 65px;

    border: solid 2px var(--primaryPurple);
    background-color: var(--primaryPurple);
`;

export const Conteudo = styled.div`
    width: 1285px;
    min-height: 850px;
    height: auto;
    overflow: hidden;
    // justify-content: center;

    padding-top: 20px;
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 20px;


    display: flex;
    flex-direction: column;

    background-color: white;

    > h1 {
        width: 400px;
        text-align: center;
        align-self: center;
  
        margin-bottom: 80px;

        font-size: 30px;

        color: var(--primaryPurple);
        border-bottom: solid 4px var(--primaryGreenWater);
    }

    > p {
        font-size: 25px;
        margin-bottom: 90px;
    }

    > span {
        color: var(--primaryPurple);
        font-weight: bold;
        font-size: 25px;
    }

    > input {
        height: 50px;

        border: none;
        border-bottom: solid 4px var(--primaryPurple);

        font-size: 20px;
        padding-left: 5px;

        margin-bottom: 100px;
    }

    > textarea {
        height: 150px;
        
        margin-top: 10px;
        margin-bottom: 50px;
        padding: 15px;

        font-size: 20px;

        border-radius: 4px;
        border: none;
        resize: vertical;

        background-color: var(--greyQuaternary);
    }

    > button {
        width: 300px;
        height: 30px;

        align-self: center;
        border: none;
        border-radius: 5px;

        color: white;
        font-size: 16px;

        font-weight: bold;
    
        background-color: var(--primaryPurple);

        :hover {
            cursor: pointer;
        }
    }
`;