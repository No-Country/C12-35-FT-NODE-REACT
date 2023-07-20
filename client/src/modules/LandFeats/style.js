import styled from "styled-components";

export const FeatsWrapper = styled.div`
  position: relative;
  z-index: 2;
`

export const FeatsTitle = styled.h1`
  text-align: center;
  color: #4BFFB3;
  font-family: "Inter";
  font-weight: 600;
  margin: 100px;

  @media (max-width: 600px) {
    font-size: 1.5rem;

    @media (max-width: 600px) {
      margin: 50px;
    }
  }
`

export const FeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr)
`

export const Features = styled.div`
  grid-column: 4 / span 6;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    grid-column: 2 / span 10;
  }
`