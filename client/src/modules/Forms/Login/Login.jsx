import React from "react";
import { useFormik } from "formik";

import { loginConfig } from "../../../services/global/FormikConfig/login";

import {FormInput, FormSubmit} from '@/components';

import { loginUser } from "../../../services/queries/User";

import { FormStyle } from "./style";




function Login() {

    const formik = useFormik(loginConfig(loginUser))
    console.log(formik.values)

  return (
    <FormStyle onSubmit={formik.handleSubmit}>

        <FormInput label={'Email'} id={'email'} type={'text'} formik={formik} />

        <FormInput label={'Contraseña'} id={'password'} type={'text'} formik={formik} />

        <FormSubmit msg={'Acceder'}/>

    </FormStyle>
  )
}

export default Login;
