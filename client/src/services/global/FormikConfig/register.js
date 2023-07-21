import * as yup from "yup"

//NO ELIMINAR LO COMENTADO.

export const registerConfig = () => {
  return {
    initialValues: {
      first_name: "",
      last_name: "",
      password: "",
      email: ""
      /* address: "",
      local_address: "",
      postal_code: "",
      phone_number: "",
      country: "",
      document_type: "",
      document_number: "",
      birthdate: "",
      profile_picture: "holamundo" */
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required("Campo Requerido"),
      last_name: yup.string().required("Campo Requerido"),
      email: yup.string().email("Email inválido").required("Campo Requerido"),
      password: yup
        .string()
        .min(8, "Debe tener un mínimo de 8 caracteres")
        .max(20, "Debe tener como maximo 20 caracteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/,
          "Debe contener una minúscula, mayúscula, número y símbolo"
        )
        .required("Campo Requerido")
      /* phone_number: yup
        .string()
        .min(9, "Número de Teléfono Inválido")
        .max(15, "Numero de Telefono Invalido")
        .required("Campo Requerido"),
      country: yup.string().required("Campo Requerido"),
      document_type: yup.string().required("Campo Requerido"),
      document_number: yup
        .string()
        .min(8, "Documento Inválido")
        .required("Campo Requerido"),
      birthdate: yup
        .date()
        .max(new Date("2005-01-01"), "Debes Ser mayor de edad")
        .required("Campo Requerido"),
      address: yup.string().required("Campo Requerido"),
      local_address: yup.string().required("Campo Requerido"),
      postal_code: yup.string().required("Campo Requerido") */
    })
  }
}

/* 
    icons:
    GiPadlock "react-icons/gi", candado,
    
    email:
    MdLock,"react-icons/md"
    MdEmail
    MdMarkEmailUnread, "react-icons/md" 


    person
    IoPersonCircle, "react-icons/io5"



*/

export const stagesEstructure = [
  {
    stage: 0,
    text: {
      title: "Necesitamos tus datos personales",
      message: "Necesitamos tus datos para continuar con el registro",
      icon: "IoPersonCircle"
    },
    fields: [
      { label: "Nombre", id: "first_name", type: "text" },
      { label: "Apellido", id: "last_name", type: "text" }
      // { label: "Fecha de Nacimiento", id: "birthdate", type: "date" }
    ]
  },
  {
    stage: 1,
    text: {
      title: "Últimos pasos!!!",
      message: "Ya estás cerca de finalizar el proceso de registro.",
      icon: ["MdLock", "MdEmail"]
    },
    fields: [
      { label: "Email", id: "email", type: "email" },
      // { label: "Número de Teléfono", id: "phone_number", type: "text" },
      { label: "Contraseña", id: "password", type: "text" }
    ]
  }

  /*     ,
  {
    stage: 2,
    text: {
      title: "Necesitamos tus datos personales",
      message: "Necesitamos tus datos para continuar con el registro",
      icon: "IoPersonCircle",
    },
    fields: [
      { label: "Dirección", id: "address", type: "text" },
      { label: "Dirección Local", id: "local_address", type: "text" },
      { label: "Codigo Postal", id: "postal_code", type: "text" }
    ]
  },
  {
    stage: 3,
    text: {
      title: "Necesitamos tus datos personales",
      message: "Necesitamos tus datos para continuar con el registro",
      icon: "IoPersonCircle",
    },
    fields: [
      { label: "País", id: "country", type: "text" },
      { label: "Tipo de Documento", id: "document_type", type: "DropDown", data:["(DNI) Documento Nacional de Identidad", "Pasaporte", "(CI) Cédula de Identidad"] },
      { label: "Número de Documento", id: "document_number", type: "text" },
      
    ]
  } */
]
