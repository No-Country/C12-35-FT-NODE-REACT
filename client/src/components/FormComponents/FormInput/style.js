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
  background-color: var(--background-light);
  
  height: 50px;
  width: 100%;
  border-radius: var(--radius-button);
  padding-left: 30px;
  padding-right: 10px;
  

  &:focus,
  &:valid{
    background-color: var(--background-light);
    color: var(--primary);
  }
  &:hover::placeholder {
        color: var(--primary);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    font-weight: 400;
    font-size: 13px;
    
  }
`

export const SpanError = styled.span`
  height: 0.0001px;
  margin-left: 15px;
  font-size: 0.7rem;
  color: var(--color-error);
  font-weight: 400;
`
