import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
  z-index: 1;
  translate: 0 -125vh;
`

export const FormTitle = styled.h1`
  text-align: center;
  color: #4BFFB3;
  font-family: "Inter";
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 150px);
`

export const FormHeading = styled.h3`
  grid-column: 4 / span 6;
  grid-row: 1 / span 1;
  text-align: center;
  color: white;
  font-family: "Poppins";
  font-weight: 400;
  margin: 50px;

  @media (max-width: 600px) {
    grid-column: 2 / span 10;
    font-size: 0.8rem;
    margin: 20px;
  }
`

export const LandFormWrap = styled.form`
  grid-column: 4 / span 6;
  grid-row: 2 / span 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  translate: 0 -70px;

  @media (max-width: 600px) {
    grid-column: 2 / span 10;
  }
`

export const FormNom = styled.input`
  background-color: #3D3D3D;
  color: white;
  display: block;
  flex-basis: 100%;
  margin: 10px;
  height: 60px;
  border-radius: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  padding: 0 20px;
`

export const FormEmail = styled.input`
  background-color: #3D3D3D;
  color: white;
  display: block;
  flex-basis: 100%;
  margin: 10px;
  height: 60px;
  border-radius: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  padding: 0 20px;
`

export const FormMess = styled.textarea`
  background-color: #3D3D3D;
  color: white;
  display: block;
  flex-basis: 100%;
  margin: 10px;
  height: 200px;
  border-radius: 10px;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  padding: 20px;
`

export const FormFoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 100%;
  margin: 10px;
  overflow: hidden;
`

export const FormCaptcha = styled.div`
  background-color: #fff;
  height: 60px;
  margin: 0 5px 0 0;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 40px;
    width: 48%;
  }
`

export const FormButton = styled.input`
  background-color: #fff;
  border-radius: 10px;
  height: 60px;
  width: 350px;
  font-family: "Poppins";
  font-weight: 600;
  font-size: 1.2rem;
  color: #2E2E2E;
  margin: 0 0 0 5px;
  background: linear-gradient(to right, #4B7DFF, #4BFFB3);
  cursor: pointer;

  @media (max-width: 600px) {
    height: 40px;
    width: 48%;
    font-size: 1rem;
  }
`

export const FormMessage = styled.div`
  color: var(--color-error);
`