import styled from "styled-components";

export const Wrapper = styled.div`
    background-color:${(props) => props.$backgroundColor ? props.$backgroundColor : ""};
    border-radius:${(props) => props.$borderRadius ? props.$borderRadius : ""};
    margin-bottom:${(props) => props.$marginBottom ? props.$marginBottom : ""};
    padding:${(props) => props.$padding ? props.$padding : ""};
` 