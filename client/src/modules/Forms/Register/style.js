import styled from "styled-components"


export const FormWrap = styled.div`
  display: grid;
  grid-template-columns; 1fr 1fr;
  grid-gap: 10px;
  height: 579px;
  width: 687px;
  border-radius: var(--radius-cards);
  padding: 20px;
  margin: 20px;
  margin-top: 15%;
  background-color: #3D3D3D;
  font-family: "Poppins";
`
export const SectionForm = styled.div`
    height: 35%;
    display: flex;
    justify-content:center;
    align-items: center;
    font-weight: 700;
    text-align: center;
`

export const FormStyle = styled.form`
  background-color: #3D3D3D;
  border-radius: var(--radius-cards);

  width; 100%;

`
export const Stage = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

`

export const ButtonWrap = styled.div`
  width: 100%;
`
export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  width: 100%;
`