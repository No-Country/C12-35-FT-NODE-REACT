import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #3d3d3d;
  border-radius: 10px;
  width: 70%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px 20px 20px;
`

export const UpperGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-family: 'Poppins';
  color: #4BFFB3;
  font-size: 20px;
`

export const Subtitle = styled.h2`
  font-family: 'Poppins';
  color: #4BFFB3;
  font-size: 20px;
`

export const Imagen = styled.img`
  width: 150px;
  height: 150px;
`

export const BtnVolver = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #4BFFB3;
  font-family: 'Poppins';
  color: #3d3d3d;
`