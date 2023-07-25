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
      initialValues={{ numberCard: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        numberCard: Yup.number()
          .max(16, "numero de tarjeta invalido")
          .min(16, "numero de tarjeta invalido")
          .positive()
          .required("Required"),
        nameCard: Yup.string().required("Required"),
        expDate: Yup.date().required("Required"),
        securityCode: Yup.number().required("Required").positive(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <FormWrapper onSubmit={formik.handleSubmit}>
          <InputForm
            formik={formik}
            id="numberCard"
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            composeEventHandlers={composeEventHandlers}
            touched={formik.touched.numberCard}
            error={formik.errors.numberCard}
          >
            Numero de tarjeta
          </InputForm>
          <InputForm
            formik={formik}
            id="nameCard"
            isFocused={isFocused}
            setIsFocused={setIsFocused}
            composeEventHandlers={composeEventHandlers}
            touched={formik.touched.nameCard}
            error={formik.errors.nameCard}
          >
            Nombre de tarjeta
          </InputForm>
          <InputWrap $padding="0" $display="flex" $gap="1rem" $width="100%">
            <InputWrap $width="50%">
              <InputForm
                formik={formik}
                id="expDate"
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                composeEventHandlers={composeEventHandlers}
                touched={formik.touched.expDate}
                error={formik.errors.expDate}
              >
                Fecha de vencimiento
              </InputForm>
              <DateFormat>Formato:DD/AA</DateFormat>
            </InputWrap>
            <InputWrap $width="50%">
              <InputForm
                formik={formik}
                id="securityCode"
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                composeEventHandlers={composeEventHandlers}
                touched={formik.touched.securityCode}
                error={formik.errors.securityCode}
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
