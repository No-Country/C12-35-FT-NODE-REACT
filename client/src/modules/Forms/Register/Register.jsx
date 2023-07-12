import { FormButton, FormSubmit } from "@/components"
import { registerConfig, stagesEstructure } from "@@/global/FormikConfig"
import { registerUser } from "@@/queries"
import { useFormik } from "formik"
import React, { useState } from "react"
import FormStage from "./FormStage"
import { ButtonWrap, FormStyle } from "./style"

function Register() {
  const [stageIndex, setStageIndex] = useState(0)

  const handleNextStage = () => {
    setStageIndex(stageIndex + 1)
  }

  console.log(stageIndex)

  const formik = useFormik(registerConfig(registerUser))

  return (
    <FormStyle onSubmit={formik.handleSubmit}>
      {stagesEstructure.map((stage, index) => (
        <div
          key={index}
          style={{ display: index === stageIndex ? "block" : "none" }}>
          <FormStage fields={stage.fields} formObject={formik} />
        </div>
      ))}
      <ButtonWrap>
        {formik.values.first_name &&
        formik.values.last_name &&
        formik.values.password &&
        stageIndex === 0 ? (
          <FormButton id='btnStageOne' handler={handleNextStage} />
        ) : null}
        {formik.values.country &&
        formik.values.document_type &&
        formik.values.document_number &&
        formik.values.birthdate &&
        stageIndex === 1 ? (
          <FormButton id='btnStageTwo' handler={handleNextStage} />
        ) : null}
        {formik.values.address &&
        formik.values.local_address &&
        formik.values.postal_code &&
        stageIndex === 2 ? (
          <FormButton id='btnStageThree' handler={handleNextStage} />
        ) : null}
        {formik.values.email && formik.values.phone_number ? (
          <FormSubmit msg={"Registrar"} />
        ) : null}
      </ButtonWrap>
    </FormStyle>
  )
}
export default Register
