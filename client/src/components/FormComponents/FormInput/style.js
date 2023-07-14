import styled from "styled-components"

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
`

export const Label = styled.label`
  color: #D9D9D9;
  font-weight: bold;
  margin: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  background-color: #545454;
  height: 50px;
  width: 100%;

  border-radius: var(--radius-button);
`

export const SpanError = styled.span`
  margin-left: 15px;
  color: red;
  font-weight: bold;
`
