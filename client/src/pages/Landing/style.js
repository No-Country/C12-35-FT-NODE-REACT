import styled from "styled-components";

export const LandingWrapper = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2e2e2e;
  overflow: hidden;
`

export const Background = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 1;
  z-index: 1;
  backdrop-filter: blur(55px);
`

export const SVGWrapper = styled.svg`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 0;
`

export const PathWrapper = styled.path`
`

export const Hero = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 100px);
  position: absolute;
  top: 0;
  z-index: 2;
  font-family: "Inter";
  color: white;
`

export const StyledTitle = styled.div`
  grid-column: 3 / span 8;
  grid-row: 3 / span 1;
  font-size: 2.5rem;
  font-weight: 900;
`

export const StyledSub = styled.div`
  grid-column: 3 / span 8;
  grid-row: 4 / span 1;
  font-size: 1.2rem;
  font-weight: 600;
`

export const TagsGroup = styled.div`
  grid-column: 3 / span 3;
  grid-row: 5 / span 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const Tag = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: .7rem;
  color: #2E2E2E;
  background-color: #4bffb3;
  border-radius: 20px;
  height: 40px;
  width: 100px;
  padding: 10px 40px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`