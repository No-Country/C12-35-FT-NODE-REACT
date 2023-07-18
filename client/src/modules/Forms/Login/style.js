import styled from "styled-components"
import { Link } from "react-router-dom"

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

export const WelcomeLogo = styled.div`
  width: 75px;
  height: 75px;
  border-radius: var(--radius-full);
  background-color: var(--background-light);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    bottom: -3px;
  }
`

export const Title = styled.h1`
  color: var(--primary);
  margin: 20px 0px 00px 0px;
  font-weight: 500;
  font-size: 22px;
`

export const Message = styled.span`
  color: var(--text-secondary);
  margin: 10px 30px;
  font-size: 16px;
  font-weight: 400;
`

export const ForgotPassword = styled(Link)`
  margin: 10px;
  align-self: center;
  font-size: 14px;
  color: var(--primary);
`
