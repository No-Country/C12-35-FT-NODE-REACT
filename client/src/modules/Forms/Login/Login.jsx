import React, { useState } from "react"
import { useFormik } from "formik"
import {useDispatch} from "react-redux";

import { InputPasswordCustom } from "@/components";
import { FormInput, FormSubmit, FormButton } from "@/components"
import { loginConfig } from "@@/global/FormikConfig/login"
import { loginUser } from "@@/queries/User"
import { FormErrorResponse } from "@/components/FormComponents/FormErrorResponse"
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


function Login() {
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  const onSubmit = (values)=>{
    
    dispatch(loginUser(values, setError))
  }
  
  const formik = useFormik({...loginConfig(), onSubmit})


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
        <InputPasswordCustom 
          register={true}
          id={"password"}
          type={"text"}
          formik={formik}
          label={"Contraseña"}
        />
        {
          formik.values.password && formik.values.email && !Object.keys(formik.errors).length
                ? 
                <FormSubmit msg={"Ingresar"} />
                :
                <FormButton disabled={true} msg={"Ingresar"} />
        }
        {error && <FormErrorResponse error={error} />}

        <ForgotPassword>¿Olvidaste tu contraseña?</ForgotPassword>
      </FormStyle>
    </FormWrap>
  )
}

export default Login
