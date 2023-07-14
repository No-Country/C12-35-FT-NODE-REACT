import React from 'react';
import { FormButton, FormCaptcha, FormEmail, FormFoot, FormGrid, FormHeading, FormMess, FormNom, FormTitle, FormWrapper, LandFormWrap } from './style';
import ReCAPTCHA from "react-google-recaptcha";

export default function LandForm() {
  return (
    <FormWrapper>
      <FormTitle>¿Necesitas ayuda?</FormTitle>
      <FormGrid>
        <FormHeading>Ingresá los siguientes datos para comunicarnos con vos.</FormHeading>
        <LandFormWrap>
          <FormNom type="text" size="20" placeholder="Nombre completo"></FormNom>
          <FormEmail type="email" placeholder="Correo electrónico"></FormEmail>
          <FormMess placeholder="¿En qué podemos ayudarte?"></FormMess>
          <FormFoot>
            <FormCaptcha>
              <ReCAPTCHA sitekey="6LdPAxYnAAAAALMxjIC-HASynpBTfLihpPTZGaMw" />
            </FormCaptcha>
            <FormButton type='submit' value="Solicitar" />
          </FormFoot>
        </LandFormWrap>
      </FormGrid>
    </FormWrapper>
  )
}