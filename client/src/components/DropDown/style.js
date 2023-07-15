import styled, { css, keyframes } from 'styled-components';


export const DropDownWrap = styled.div`
    position: relative;

    color: var(--text-secondary);
    font-weight: 400;
    font-size: 13px;
    width: 100%;
`
export const ActiveDropDown = styled.div`
    background-color: var(--background-light);
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--radius-button);
    padding-left: 30px;
    padding-right: 10px;

    &:hover {
        color: var(--primary);
    }

    ${
        ({isOpen}) => 
        isOpen && 
        css`
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
        `
    }

`

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`

export const IconWrapper = styled.span`
    display: inline-block;
    transform-origin: center;
    animation: ${({ isRotating }) =>
        isRotating ?

        css`
            ${rotateAnimation} 0s linear forwards;
            `
        : 'none'
    };
`
export const Label= styled.span`
`
//    top: calc(65% - 125px);
export const DropDownList = styled.ul`
    position: absolute;
    width: 100%;

    bottom: 0px;
    transform: translateY(100%);

`

export const DropDownItem = styled.li`
    background-color: var(--background-light);
    width: 100%;
    padding-left: 30px;

    display: flex;
    align-items: center;

    &:hover {
        color: var(--primary);
    }

    &:last-child{
        border-bottom-left-radius: var(--radius-button);
        border-bottom-right-radius: var(--radius-button);
    }
    
`   
export const SpanError = styled.span`
    position: absolute;

    margin-left: 15px;
    color: red;
    font-size: 16px;
    font-weight: bold;
`
