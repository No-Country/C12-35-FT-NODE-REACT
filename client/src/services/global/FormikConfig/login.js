import * as yup from 'yup';


export const loginConfig = (loginUser, errorFunc) => { 
    
    return {
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalido').required('Campo Requerido'),
            password: yup.string().matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/, 'Debe contener Dígitos, minúsculas, mayúsculas, símbolos y una cantidad de 6 a 10 caracteres').required('Campo Requerido'),
        }),
        onSubmit: values =>{
            console.log(values)
            loginUser(values, errorFunc)
        }
    }
}