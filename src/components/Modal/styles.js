import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: #333c;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.section`
    background-color: var(--primaryPurple);
    min-width: 250px;
    min-height: 255px;
    max-height: calc(100vh - 20px);
    padding: 20px;
    z-index: 9;
    box-shadow: 0px 0px 10px black;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;


    > span {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
        transition: 0.2s;
        color: white;

        :hover {
            color: red;
        }
    }

    > header {
        font-weight: bold;
        font-size: 24px;
        text-align: center;
        margin: 0px 20px;
        color: white;
    }
`;