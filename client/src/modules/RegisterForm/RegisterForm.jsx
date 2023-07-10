import React, { useState } from "react";
import {useFormik} from 'formik';
import * as yup from 'yup';
import FormStage from "./FormStage";
import { MyCards } from '@/modules';
import { FormSubmit, FormButton } from "@/components";

const formStages = [
    {   
        label: "Etapa 1",
        fields:[
            {label: 'Nombre', id: 'firstName', type:'text'},
            {label: 'Apellido', id: 'lastName', type: 'text'},
            {label: 'Email', id: 'email', type: 'email'}
            
        ]
    },
    {
        label: "Etapa 2",
        fields: [
            {label: 'Numero de Telefono',id: 'phoneNumber', type: 'text'},
            {label: 'Contraseña',id: 'password', type: 'text'},
        ]

    },
    {
        label: "Etapa 3",
        fields: [
            {label: 'Pais',id: 'country', type: 'text'},
            {label: 'Tipo de Documento',id: 'documentType', type: 'text'},
            {label: 'Numero de Documento',id: 'documentNumber', type: 'text'},
            {label: 'Fecha de Nacimiento',id: 'birthdate', type: 'date'}
        ]
    },
    {
        label: "Etapa 4",
        fields: [
            {label: 'Direccion',id: 'address', type: 'text'},
            {label: 'Direccion Local',id: 'localAddress', type: 'text'},
            {label: 'Codigo Postal',id: 'postalCode', type: 'text'}
        ]
    }
]


function RegisterForm() {

    const [stageIndex, setStageIndex] = useState(0)

    // dni 8 numeros, licencia de conducir 1 letra, 8 digitos, pasaporte 3 letras 6 numeros
    //formik
    const formik = useFormik({
        initialValues:{
            firstName: "",
            lastName: "",
            password: "",
            email: "",
            address: "",
            localAddress: "",
            postalCode: "",
            phoneNumber: "",
            country: "",
            documentType: "",
            documentNumber: "",
            birthdate: "",
            profilePicture: "",
        },
        validationSchema: yup.object().shape({

            firstName: yup.string().required('Campo requerido'),
            lastName: yup.string().required('Campo requerido'),
            email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalido').required(),
            phoneNumber: yup.string().min(9, 'Numero de telefono Invalido').max(15,'Numero de Telefono Invalido').required('Campo requerido'),
            password: yup.string().min(6, 'Debe tener un minimo de 6 caracteres').matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/, 'Contraseña Invalida, debe contener Dígitos, minúsculas, mayúsculas y símbolos').required('Campo requerido'),
            country: yup.string().required('Campo requerido'),
            documentType: yup.string().required('Campo requerido'),
            documentNumber: yup.string().min(8, 'Documento invalido').required('Campo requerido'),
            //date
            address: yup.string().required('Campo requerido'),
            localAddress: yup.string().required('Campo requerido'),
            postalCode: yup.string().required('Campo requerido')

        }),
        onSubmit: values =>{

            console.log(values)

        }
    });

    const handleNextStage = ()=>{
        setStageIndex(stageIndex + 1)
    }

    console.log(stageIndex)

  return (
    <form onSubmit={formik.handleSubmit}>


        {
            formStages.map((stage, index)=>(
                <div key={index} style={{display: index === stageIndex ? "block" : "none"}}>
                    <FormStage fields={stage.fields} formObject={formik} />
                </div>
            ))
        }
        <div>
            {    
                formik.values.firstName && formik.values.lastName && formik.values.email && stageIndex === 0
                ? <FormButton id='btnStageOne' handler={handleNextStage} /> : null    
            }
            {
                formik.values.password && formik.values.phoneNumber && stageIndex === 1
                ?<FormButton id='btnStageTwo' handler={handleNextStage} /> : null
            }
            {
                formik.values.country && formik.values.documentType && formik.values.documentNumber && formik.values.birthdate && stageIndex === 2
                ?<FormButton id='btnStageThree' handler={handleNextStage} /> : null
            }
            {
                formik.values.address && formik.values.localAddress && formik.values.postalCode 
                ? <FormSubmit msg={'Registrar'}/> : null
            }

        </div>

            <div style={{width:'600px', padding:'20px'}}><MyCards /></div>

    </form>

  )

}

export default RegisterForm;