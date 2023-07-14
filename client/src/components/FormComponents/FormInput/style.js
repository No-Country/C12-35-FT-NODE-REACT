import styled from "styled-components"

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 175px;
`

export const Label = styled.label`
  margin: 5px;
  font-weight: bold;
`

export const Input = styled.input`
  background-color: grey;
  margin: 5px;
  padding: 5px;
  border: 3px solid black;
  border-radius: var(--radius-button);
`

export const SpanError = styled.span`
  margin-left: 15px;
  color: red;
  font-weight: bold;
`
