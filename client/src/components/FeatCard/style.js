import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 20px;
  height: 320px;
  width: 280px;
  padding: 20px 20px 0 20px;
  background-color: #3D3D3D;
  color: #CDCDCD;
  font-family: "Inter";
  margin: 0 0 200px 0;
  position: relative;

  @media (max-width: 600px) {
    transform: scale(.75);
    margin: 0 0 -20px 0;
  }
`

export const CardTitle = styled.h3`
  color: white;
  font-weight: 500;
  margin: 5px 0;
`

export const CardP = styled.p`
  color: #CDCDCD;
  font-weight: 500;
  font-size: .75rem;
  margin: 10px 0;
`

export const ImageWrapper = styled.img`
  background-color: #cdcdcd;
  width: 240px;
  height: auto;
  position: absolute;
  bottom: 0;
  border-radius: 15px 15px 0 0;
`