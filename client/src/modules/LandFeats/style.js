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
`

export const FeatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, fr);
`

export const Features = styled.div`
  grid-column: 3 / span 8;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Feature = styled.div`
  border-radius: 20px;
  min-height: 250px;
  min-width: 220px;
  padding: 5px;
  background-color: #3D3D3D;
  color: #CDCDCD;
`