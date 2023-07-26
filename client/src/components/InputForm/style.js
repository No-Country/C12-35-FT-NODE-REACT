import styled from "styled-components";

export const Input = styled.input`
  border-radius: var(--radius-light);
  background-color: ${(props) =>
    props.$error ? "#5B4040" : "var(--background-light)"};
  border: ${(props) => (props.$error ? "2px solid var(--color-error)" : "")};
  color: var(--text-primary-light);
  padding: 0.5rem;
  padding-left: 1.3rem;
  margin-bottom: 0.5rem;
  width: 100%;
  height: 3rem;
`;
export const Label = styled.label`
  display: "block";
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  color: var(--text-primary);
  font-size: 13px;
  margin-bottom: 5px;
`;
export const InputWrapper = styled.div`
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  display: ${(props) => (props.$display ? props.$display : "")};
  flex-direction: ${(props) =>
    props.$flexDireccion ? props.$flexDireccion : ""};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : "")};
`;
export const ErrorWraper = styled.div`
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  color: var(--color-error);
  font-size: 0.8rem;
`;