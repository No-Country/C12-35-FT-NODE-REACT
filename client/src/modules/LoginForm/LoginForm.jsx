import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import {FormInput, FormSubmit} from '@/components';




function LoginForm() {

    const formik = useFormik({
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalido').required(),
            password: yup.string().matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/, 'Debe contener Dígitos, minúsculas, mayúsculas, símbolos y una cantidad de 6 a 10 caracteres').required('Campo requerido'),
        }),
        onSubmit: values =>{
            console.log(values)
        }
    })

  return (
    <form>

        <FormInput label={'Email'} id={'email'} type='email' formik={formik} />

        <FormInput label={'Contraseña'} id={'password'} type='text' formik={formik} />

        <FormSubmit msg='Acceder'/>

    </form>
  )
}

export default LoginForm;
