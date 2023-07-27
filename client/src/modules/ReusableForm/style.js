import styled from "styled-components"

export const VerticalFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0px 20px;
  row-gap: 0;
  column-gap: 20px;

  & button {
    width: 100%;
    margin: 30px 0 20px 0;
  }
`
