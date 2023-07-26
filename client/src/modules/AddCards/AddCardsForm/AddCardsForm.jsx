import React, { useState } from "react";
import { Formik } from "formik";
import { InputForm, ButtonSubmit } from "@/components";
import { DateFormat, FormWrapper, InputWrap } from "./style";
import { validateCards } from "../../../services/global/FormikConfig/validateCards";

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
      validationSchema={validateCards().validationSchema}
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
              <DateFormat>Formato:MM/AA</DateFormat>
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

