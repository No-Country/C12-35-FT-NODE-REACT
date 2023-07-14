import * as yup from "yup"

export const registerConfig = (registerUser, errorFunc) => {
  return {
    initialValues: {
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
      profile_picture: "holamundo"
    },
    validationSchema: yup.object().shape({
      first_name: yup.string().required("Campo Requerido"),
      last_name: yup.string().required("Campo Requerido"),
      email: yup
        .string()
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email invalido"
        )
        .required("Campo Requerido"),
      phone_number: yup
        .string()
        .min(9, "Número de Teléfono Inválido")
        .max(15, "Numero de Telefono Invalido")
        .required("Campo Requerido"),
      password: yup
        .string()
        .min(6, "Debe tener un mínimo de 6 caracteres")
        .matches(
          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/,
          "Contraseña Invalida, debe contener Dígitos, minúsculas, mayúsculas y símbolos"
        )
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
      postal_code: yup.string().required("Campo Requerido")
    }),
    onSubmit: (values) => {
      console.log(values)
      registerUser(values, errorFunc)
    }
  }
}

/* 
    icons:
    GiPadlock "react-icons/gi", candado,
    
    email:
    MdLock,"react-icons/md"
    MdMarkEmailUnread, "react-icons/md" 
    MdEmail


    person
    IoPersonCircle, "react-icons/io5"



*/

export const stagesEstructure = [
  {
    label: "Etapa 1",
    text: {
      title: "Necesitamos tu correo",
      message:
        "Asegurate de ingresar tu correo personal, es importante para que puedas recuperar tu cuenta"
    },
    icon: "MdMarkEmailUnread",
    fields: [
      { placeholder: "Nombre", id: "first_name", type: "text" },
      { label: "Apellido", id: "last_name", type: "text" },
      { label: "Contraseña", id: "password", type: "text" }
    ]
  },
  {
    label: "Etapa 2",
    text: {
      title: "Necesitamos tus datos personales",
      message: "Necesitamos tus datos para continuar con el registro"
    },
    icon: "IoPersonCircle",
    fields: [
      { label: "País", id: "country", type: "text" },
      { label: "Tipo de Documento", id: "document_type", type: "text" },
      { label: "Número de Documento", id: "document_number", type: "text" },
      { label: "Fecha de Nacimiento", id: "birthdate", type: "date" }
    ]
  },
  {
    label: "Etapa 3",
    text: {
      title: "",
      message: ""
    },
    icon: "",
    fields: [
      { label: "Dirección", id: "address", type: "text" },
      { label: "Dirección Local", id: "local_address", type: "text" },
      { label: "Codigo Postal", id: "postal_code", type: "text" }
    ]
  },
  {
    label: "Etapa 4",
    text: {
      title: "Creá tu contraseña",
      message: "Último paso! Creá tu contraseña para completar el registro."
    },
    icon: "MdLock",
    fields: [
      { label: "Email", id: "email", type: "email" },
      { label: "Número de Teléfono", id: "phone_number", type: "text" }
    ]
  }
]
