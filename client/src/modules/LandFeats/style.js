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
`

export const FeaturesTwo = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`