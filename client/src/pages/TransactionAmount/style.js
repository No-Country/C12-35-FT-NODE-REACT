import styled from "styled-components"

export const DestinationAccountWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const DestinationAccountWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const Amount = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & span {
    color: var(--text-primary-light);
  }

  & div {
    font-size: 1.8rem;
  }
`

export const StyleAccount = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & span {
    color: var(--text-primary-light);
  }
`
