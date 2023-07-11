import * as yup from 'yup';


export const registerConfig =(registerUser)=>{ 
    
    
    return{
        initialValues:{
            first_name: "",
            last_name: "",
            password: "",
            email: "",
            address: "",
            local_address: "",
            postal_code: "",
            phone_number: "",
            country: "",
            document_type: "",
            document_number: "",
            birthdate: "",
            profile_picture: "holamundo",
        },
        validationSchema: yup.object().shape({

            first_name: yup.string().required('Campo requerido'),
            last_name: yup.string().required('Campo requerido'),
            email: yup.string().matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email invalido').required(),
            phone_number: yup.string().min(9, 'Numero de telefono Invalido').max(15,'Numero de Telefono Invalido').required('Campo requerido'),
            password: yup.string().min(6, 'Debe tener un minimo de 6 caracteres').matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/, 'Contraseña Invalida, debe contener Dígitos, minúsculas, mayúsculas y símbolos').required('Campo requerido'),
            country: yup.string().required('Campo requerido'),
            document_type: yup.string().required('Campo requerido'),
            document_number: yup.string().min(8, 'Documento invalido').required('Campo requerido'),
            //date
            address: yup.string().required('Campo requerido'),
            local_address: yup.string().required('Campo requerido'),
            postal_code: yup.string().required('Campo requerido')

        }),
        onSubmit: values =>{

            console.log(values)
            registerUser(values)

        }
    }
}

export const stagesEstructure =  [
    {   
        label: "Etapa 1",
        fields:[
            {label: 'Nombre', id: 'first_name', type:'text'},
            {label: 'Apellido', id: 'last_name', type: 'text'},
            {label: 'Contraseña',id: 'password', type: 'text'},
            
        ]
    },
    {
        label: "Etapa 2",
        fields: [
            {label: 'Pais',id: 'country', type: 'text'},
            {label: 'Tipo de Documento',id: 'document_type', type: 'text'},
            {label: 'Numero de Documento',id: 'document_number', type: 'text'},
            {label: 'Fecha de Nacimiento',id: 'birthdate', type: 'date'}
        ]
        
    },
    {
        label: "Etapa 3",
        fields: [
            {label: 'Direccion',id: 'address', type: 'text'},
            {label: 'Direccion Local',id: 'local_address', type: 'text'},
            {label: 'Codigo Postal',id: 'postal_code', type: 'text'}
        ]
    },
    {
        label: "Etapa 4",
        fields: [
            {label: 'Email', id: 'email', type: 'email'},
            {label: 'Numero de Telefono',id: 'phone_number', type: 'text'},
        ]
    }
]