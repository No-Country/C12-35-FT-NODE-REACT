import styled from "styled-components";

export const AboutWrapper = styled.div`
  color: white;
  position: relative;
  z-index: 1;
  translate: 0 -150vh;
`

export const AboutTitle = styled.h1`
  text-align: center;
  color: #4BFFB3;
  font-family: "Inter";
  font-weight: 600;
  margin: 100px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

export const AboutHero = styled.div`
  grid-column: 3 / span 4;
  font-family: "Poppins";

  @media (max-width: 600px) {
    grid-column: 2 / span 5;
  }
`

export const HeroTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 20px;
  }
`

export const HeroP = styled.p`
  font-size: 1.25rem;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 0.70rem;
    line-height: 12px;
  }
`

export const AboutImage = styled.img`
  grid-column: 7 / span 4;
  width: 100%;

  @media (max-width: 600px) {
    grid-column: 7 / span 5;
  }
`