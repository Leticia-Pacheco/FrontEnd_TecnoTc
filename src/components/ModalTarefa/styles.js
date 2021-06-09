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

export const Container = styled.div`
    width: 800px;
    min-height: 550px;
    height: auto;
    overflow: hidden;
    max-height: calc(100vh - 20px); /*Para calcular uma boa altura e que não fique tão grande nem tão pequeno*/

    z-index: 19;
    overflow-y: auto;
    position: absolute;
    flex-direction: column;
    display: flex;
    
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 25px;
    
    /* align-items: center; */
    color: var(--primaryPurple);

    box-shadow: 2px 2px 10px black;
    background-color: white;

    >span{
        margin-left: 650px;
        color: black;
        cursor: pointer;
        :hover {
            color: red;  
        }
    }

`;