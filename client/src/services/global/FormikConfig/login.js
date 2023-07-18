import * as yup from 'yup';


export const loginConfig = () => { 
    
    return {
        initialValues:{
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalido').required('Campo Requerido'),
            password: yup.string().min(8,"Debe tener un mínimo de 8 caracteres").max(24, "Debe tener como maximo 24 caracteres").matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,24}$/, 'Debe contener Dígitos, minúsculas, mayúsculas, símbolos.').required('Campo Requerido'),
        })
    }
}