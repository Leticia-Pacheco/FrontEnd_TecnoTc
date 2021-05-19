import styled  from "styled-components";

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
    height: 600px;

    background-color: red;
`;

export const Header = styled.div`
    widht: 100%;
    height: 100px;

    background-color: blue;
`;