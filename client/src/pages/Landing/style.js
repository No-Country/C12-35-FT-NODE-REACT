import styled from "styled-components";

export const LandingWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 600vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #2e2e2e;

  @media (max-width: 600px) {
    height: 550vh;
  }
`
export const Background = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  z-index: 1;
  backdrop-filter: blur(55px);
`

export const SVGWrapper = styled.svg`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 0;
  object-fit: cover;
  object-position: center;
  pointer-events: none;
`

export const PathWrapper = styled.path`
`