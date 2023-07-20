import styled from "styled-components"


export const FormWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;

  border-radius: var(--radius-cards);
  padding: 20px;
  background-color: var(--background-card);
  font-family: "Poppins";
`
export const SectionForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  text-align: center;
`

export const FormStyle = styled.form`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ButtonWrap = styled.div`
  width: 100%;
  height: auto;
`
export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  height: 15%;
  width: 100%;
`

export const Stage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const WelcomeLogo = styled.div`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: var(--radius-full);
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-size: 60px;
`

export const Title = styled.h1`
  color: var(--primary);
  margin: 20px 0px 00px 0px;
  font-weight: 500;
  font-size: 22px;
`

export const Message = styled.span`
  color: var(--text-secondary);
  margin: 15px 50px 40px 50px;
  font-size: 16px;
  font-weight: 400;
`
