import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    width: 35px;
    min-height: 35px;
    border-top: 5px solid var(--primary);
    border-right: 5px solid transparent;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;