import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: end;
  width: 15rem;
  height: 9rem;
  background-color: green;
  margin-right: 2rem;
  border-radius: var(--radius-light);
  padding: ${(props) => (props.$padding ? props.$padding : "")};
`;
export const CustomWrap = styled.div`
  display: ${(props) => (props.$display ? props.$display : "")};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : ""};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "")};
  flex-direction: ${(props) => (props.$direction ? props.$direction : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  height: ${(props) => (props.$height ? props.$height : "")};
`;
export const TextWrap = styled.p`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
  color: var(--text-primary);
`;
export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 1.4rem;
`;
export const Span = styled.span`
font-size:.9rem;
font-weight:bold;
`
