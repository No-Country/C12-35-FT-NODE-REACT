import styled from "styled-components"

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const HomeWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LeftWrap = styled.div`
  width: 50%;
  height: 100%;
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 450px;
  gap: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export const RigthWrap = styled.div`
  width: 50%;
  display: flex;
  max-width: 630px;
`
