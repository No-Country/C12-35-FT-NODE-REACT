import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;
export const InputWrap = styled.div`
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  display: ${(props) => (props.$display ? props.$display : "")};
  flex-direction: ${(props) =>
    props.$flexDireccion ? props.$flexDireccion : ""};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "")};
`;
export const DateFormat = styled.h5`
  margin-bottom: 5px;
  font-size: 8px;
  color: #888888;
`;