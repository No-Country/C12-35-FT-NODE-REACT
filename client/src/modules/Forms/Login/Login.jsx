import { FormInput, FormSubmit } from "@/components"
import { loginConfig } from "@@/global/FormikConfig/login"
import { loginUser } from "@@/queries/User"
import { useFormik } from "formik"
import React, { useState } from "react"
import {
  ForgotPassword,
  FormStyle,
  FormWrap,
  Message,
  SectionForm,
  Title,
  WelcomeLogo
} from "./style"
import women from "@/assets/images/illustrations/women.svg"

import { FormErrorResponse } from "@/components/FormComponents/FormErrorResponse"

function Login() {
  const [error, setError] = useState("")

  const formik = useFormik(loginConfig(loginUser, setError))

  console.log(formik.values)

  return (
    <FormWrap>
      <SectionForm>
        <WelcomeLogo>
          <img src={women} alt='' />
        </WelcomeLogo>
        <Title>¡Bienvenido de vuelta!</Title>
        <Message>Ingresá tus datos para iniciar sesión nuevamente.</Message>
      </SectionForm>

      <FormStyle onSubmit={formik.handleSubmit}>
        <FormInput
          register={true}
          label={"Email"}
          id={"email"}
          type={"text"}
          formik={formik}
          placeholder='Ingresá tu correo'
        />

        <FormInput
          register={true}
          label={"Contraseña"}
          id={"password"}
          type={"text"}
          formik={formik}
          placeholder='Contraseña'
        />
        <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>

        <FormSubmit msg={"Ingresar"} />

        {error && <FormErrorResponse error={error} />}
      </FormStyle>
    </FormWrap>
  )
}

export default Login
