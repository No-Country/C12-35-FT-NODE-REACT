import * as Yup from "yup"

export const validateCards = () => {
  const typeCard = ["CREDIT", "DEBIT"]

  return {
    validationSchema: Yup.object().shape({
      card_number: Yup.string()
        .required("El número de tarjeta es obligatorio")
        .max(16, "El número de tarjeta no es válido")
        .min(16, "El número de tarjeta no es válido"),
      cardholder_name: Yup.string()
        .matches(/^[a-zA-Z ]+$/, "El nombre del titular no es válido") // Solo letras y espacios permitidos
        .required("El nombre del titular es obligatorio")
        .max(25, "El nombre del titular no es válido"),
      expiration_date: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Fecha de vencimiento no válida") // Formato válido: MM/AA y mes entre 01 y 12
        .test(
          "is-valid-date",
          "La fecha de vencimiento es inválida",
          function (value) {
            if (!value) return false

            const [month, year] = value.split("/")
            const currentDate = new Date()
            const expirationDate = new Date(
              parseInt("20" + year, 10),
              parseInt(month, 10) - 1
            )

            return expirationDate > currentDate
          }
        )
        .required("La fecha de vencimiento es obligatoria"),
      cvv: Yup.string()
        .matches(/^\d{3}$/, "CVV no válido") // Exactamente 3 dígitos numéricos
        .required("El CVV es obligatorio")
        .max(3, "CVV no válido"),
      type: Yup.string()
        .required("El tipo de tarjeta es obligatorio")
        .oneOf(typeCard, `Solo puede ser ${typeCard.join(", ")}`)
        .required("Debes seleccionar una opción válida.")
    })
  }
}
