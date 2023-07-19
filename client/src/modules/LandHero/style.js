import styled from "styled-components";

export const Hero = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 100px);
  position: absolute;
  top: 0;
  z-index: 2;
  color: white;
`

export const StyledTitle = styled.div`
  grid-column: 2 / span 8;
  grid-row: 3 / span 1;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 35px;

  @media (max-width: 600px) {
    grid-column: 2 / span 10;
    grid-row: 2 / span 1;
    font-size: 1.5rem;
    line-height: 35px;
    translate: 0 20px;
  }
`

export const StyledSub = styled.div`
  grid-column: 2 / span 8;
  grid-row: 4 / span 1;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 600px) {
    grid-row: 3 / span 1;
    font-size: 0.9rem;
    line-height: 20px;
    translate: 0 -10px;
  }
`

export const TagsGroup = styled.div`
  grid-column: 2 / span 3;
  grid-row: 5 / span 1;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  translate: -80px 0;

  @media (max-width: 600px) {
    grid-column: 2 / span 8;
    grid-row: 4 / span 1;
    translate: -10px -40px;
  }
`
export const Tag = styled.div`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: .7rem;
  color: #2E2E2E;
  background-color: #4bffb3;
  border-radius: 20px;
  height: fit-content;
  width: fit-content;
  padding: 10px 10px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 10px 10px;
    height: fit-content;
    margin: 0 2px;
    width: fit-content;
  }
`