import React, { useRef } from 'react';
import { FormButton, FormCaptcha, FormEmail, FormFoot, FormGrid, FormHeading, FormMess, FormMessage, FormNom, FormTitle, FormWrapper, LandFormWrap } from './style';
import ReCAPTCHA from "react-google-recaptcha";

export default function LandForm() {
  const nom = useRef(null);
  const ema = useRef(null);
  const mes = useRef(null);
  const fm = useRef(null);

  const enviar = (e) => {
    e.preventDefault();
    nom.current.value = '';
    ema.current.value = '';
    mes.current.value = '';
    fm.current.innerHTML = 'Gracias por tu mensaje ! Lo responderemos a la brevedad';
    setTimeout(() => {
      fm.current.innerHTML = '';
    }, 2500);
  }

  return (
    <FormWrapper id="ayuda">
      <FormTitle>¿Necesitas ayuda?</FormTitle>
      <FormGrid>
        <FormHeading>Ingresá los siguientes datos para comunicarnos con vos.</FormHeading>
        <LandFormWrap>
          <FormNom ref={nom} type="text" size="20" placeholder="Nombre completo"></FormNom>
          <FormEmail ref={ema} type="email" placeholder="Correo electrónico"></FormEmail>
          <FormMess ref={mes} placeholder="¿En qué podemos ayudarte?"></FormMess>
          <FormFoot>
            <FormCaptcha>
              <ReCAPTCHA sitekey="6LdPAxYnAAAAALMxjIC-HASynpBTfLihpPTZGaMw" />
            </FormCaptcha>
            <FormButton type='submit' onClick={enviar} value="Solicitar" />
          </FormFoot>
          <FormMessage ref={fm} />
        </LandFormWrap>
      </FormGrid>
    </FormWrapper>
  )
}