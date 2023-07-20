import React from "react";
import { ButtonWrap, ContainerError } from "./style";
import { FormButton, FormSubmit, FormErrorResponse } from "@/components";

function ButtonRender({ formik, index, setIndex, fields, error, lastStage }) {
  const { errors, values } = formik;
  const fieldsId = fields.map((obj) => obj.id);

  // Simplified conditional rendering
  const isAllFieldsFilled = fieldsId.every((field) => !!values[field]);
  const isAllFieldsValid = fieldsId.every((field) => !errors[field]);
  const isLastStage = index === lastStage;

  return (
    <ButtonWrap>
      {isAllFieldsFilled && isAllFieldsValid ? (
        isLastStage ? (
          <ContainerError>
            <FormSubmit msg={"Registrar"} />
            {error && <FormErrorResponse error={error} />}
          </ContainerError>
        ) : (
          <FormButton id="btnStageTwo" handler={setIndex} msg="Siguiente" />
        )
      ) : (
        <FormButton disabled={true} msg={isLastStage ? "Registrar" : "Siguiente"} />
      )}
    </ButtonWrap>
  );
}

export default ButtonRender;