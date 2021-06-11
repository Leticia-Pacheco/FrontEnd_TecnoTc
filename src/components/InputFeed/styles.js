import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    margin-top: 15px;

    > input {
        border: 0;
        border-radius: 3px;
        padding-left: 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    > label {
        cursor: text;
        position: absolute;
        left: 10px;
        top: 0px;
        color: var(--darkGray);
        display: flex;
        align-items: center;
        transition: 0.2s ease-in-out;
        pointer-events: none;
    }

    > input, label {
        width: 100%;
        height: 30px;
        font-size: 16px;
    }

    > input:not(:placeholder-shown) + label,
    > input:focus + label {
        color: var(--light);
        top: -25px;
        font-size: 14px;
        left: 0;
    }
`;