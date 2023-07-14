import styled from "styled-components"

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:first-child {
    margin: ${(props) => (!props.$register ? "0px" : "15px 0")};
  }
`

export const Input = styled.input`
  background-color: #545454;
  height: 50px;
  width: 100%;
  border-radius: var(--radius-button);

  &::placeholder {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 13px;
    padding-left: 30px;
  }
`

export const SpanError = styled.span`
  margin-left: 15px;
  color: red;
  font-weight: bold;
`
