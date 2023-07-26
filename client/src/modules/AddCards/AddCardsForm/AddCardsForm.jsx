import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputForm, ButtonSubmit } from "@/components";
import { DateFormat, FormWrapper, InputWrap } from "./style";

function AddCardsForm() {
  const [isFocused, setIsFocused] = useState(false);

  const composeEventHandlers =
    (...handlers) =>
    (e) => {
      handlers.forEach((handler) => handler && handler(e));
    };

  return (
    <Formik
      initialValues={{
        card_number: "",
        cardholder_name: "",
        expiration_date: "",
        cvv: "",
      }}
      validationSchema={Yup.object({
        card_number: Yup.string()
          .matches(/^\d{16,16}$/, "El número de tarjeta no es válido") // Entre 16 y 19 dígitos numéricos
          .required("El número de tarjeta es obligatorio"),
        cardholder_name: Yup.string()
          .matches(/^[a-zA-Z ]+$/, "El nombre del titular no es válido") // Solo letras y espacios permitidos
          .required("El nombre del titular es obligatorio"),
        expiration_date: Yup.string()
        .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Fecha de vencimiento no válida') // Formato válido: MM/AA y mes entre 01 y 12
        .test('is-valid-date', 'La fecha de vencimiento es inválida', function (value) {
          if (!value) return false;
    
          const [month, year] = value.split('/');
          const currentDate = new Date();
          const expirationDate = new Date(parseInt('20' + year, 10), parseInt(month, 10) - 1);
    
          return expirationDate > currentDate;
        })
        .required('La fecha de vencimiento es obligatoria'),
        cvv: Yup.string()
          .matches(/^\d{3}$/, "CVV no válido") // Exactamente 3 dígitos numéricos
          .required("El CVV es obligatorio"),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 400);
      }}
    >
      {(formik) => (
        <FormWrapper onSubmit={formik.handleSubmit}>
          <InputForm
            formik={formik}
            id="card_number"
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            composeEventHandlers={composeEventHandlers}
            touched={formik.touched.card_number}
            error={formik.errors.card_number}
          >
            Numero de tarjeta
          </InputForm>
          <InputForm
            formik={formik}
            id="cardholder_name"
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            composeEventHandlers={composeEventHandlers}
            touched={formik.touched.cardholder_name}
            error={formik.errors.cardholder_name}
          >
            Nombre de tarjeta
          </InputForm>
          <InputWrap $padding="0" $display="flex" $gap="3rem" $width="100%">
            <InputWrap $width="50%">
              <InputForm
                formik={formik}
                id="expiration_date"
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                composeEventHandlers={composeEventHandlers}
                touched={formik.touched.expiration_date}
                error={formik.errors.expiration_date}
              >
                Fecha de vencimiento
              </InputForm>
              <DateFormat>Formato:DD/AA</DateFormat>
            </InputWrap>
            <InputWrap $width="50%">
              <InputForm
                formik={formik}
                id="cvv"
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                composeEventHandlers={composeEventHandlers}
                touched={formik.touched.cvv}
                error={formik.errors.cvv}
              >
                Codigo de seguridad
              </InputForm>
            </InputWrap>
          </InputWrap>
          <ButtonSubmit value="Agregar tarjeta " />
        </FormWrapper>
      )}
    </Formik>
  );
}

export default AddCardsForm;
/* validationSchema={Yup.object({
        card_number: Yup.number().positive().required("Required"),
        cardholder_name: Yup.string().required("Required"),
        expiration_date: Yup.date().required("Required"),
        cvv: Yup.number().required("Required").positive(),
      })} */
