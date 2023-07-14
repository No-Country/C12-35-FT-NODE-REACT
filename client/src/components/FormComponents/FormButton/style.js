import styled from "styled-components"

export const Button = styled.button`
    border-radius: var(--radius-button);
    color: #406D5A;
    font-weight: bold;
    background-color: #4BFFB3;

    height: 50px;
    width: 100%;

    &:disabled{
        opacity: 1.5;

        cursor: not-allowed;
    }
`