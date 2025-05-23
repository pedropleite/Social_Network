import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;

    div {
        margin: 3rem 0;
        border: 16px solid #f3f3f3;
        border-top: 16px solid #0a66c2;
        border-radius: 50%;
        width: 7.5rem;
        height: 7.5rem;
        animation: ${spin} 2s linear infinite;
    }
`;
