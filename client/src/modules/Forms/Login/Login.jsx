import { FormInput, FormSubmit } from "@/components"
import { useFormik } from "formik"
import React, { useState } from "react"
import { loginConfig } from "@@/global/FormikConfig/login"
import { loginUser } from "@@/queries/User"
import { FormStyle } from "./style"

import { FormErrorResponse } from "@/components/FormComponents/FormErrorResponse"

function Login() {

  const [error, setError] = useState('');


  const formik = useFormik(loginConfig(loginUser, setError));

  console.log(formik.values)

  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      <FormInput label={"Email"} id={"email"} type={"text"} formik={formik} />

      <FormInput
        label={"Contraseña"}
        id={"password"}
        type={"text"}
        formik={formik}
      />

      <FormSubmit msg={"Acceder"} />

      {error && <FormErrorResponse error={error}/>}
      
    </FormStyle>
  )
}

export default Login
