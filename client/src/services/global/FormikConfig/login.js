import * as yup from "yup"

export const loginConfig = () => {
  return {
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object().shape({
      email: yup.string().email("Email inválido").required("Campo Requerido"),
      password: yup
        .string()
        .min(8, "Debe tener un mínimo de 8 caracteres")
        .max(24, "Debe tener como maximo 24 caracteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).+$/,
          "Debe contener una minúscula, mayúscula, número y símbolo"
        )
        .required("Campo Requerido")
    })
  }
}
