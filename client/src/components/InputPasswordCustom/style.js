import styled, { css } from "styled-components";


export const InputWrap = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`

export const Icon = styled.button`
    position: absolute;
    left: 90%;
    color: var(--text-secondary);

    &:hover {
        color: var(--primary);
    }
    ${
        ({isTrue})=>
        isTrue &&
        css`
        color: var(--primary);
        `
    }

`

export const ErrorWrap = styled.div``

export const Error = styled.span``