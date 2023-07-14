import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 100%;
  max-width: 1280px;
  margin: 50px auto;
`

export const Wrap = styled.div`
  margin-top: 20px;
  grid-column: 6 / 25;
  grid-row: 6 / 2;
`
