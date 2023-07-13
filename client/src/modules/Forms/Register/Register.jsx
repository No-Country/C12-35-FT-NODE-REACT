import { FormButton, FormSubmit } from "@/components"
import { registerConfig, stagesEstructure } from "@@/global/FormikConfig"
import { registerUser } from "@@/queries"
import { useFormik } from "formik"
import React, { useState } from "react"
import FormStage from "./FormStage"
import { ButtonWrap, FormStyle, Container } from "./style"

import { FormErrorResponse } from "@/components"




function Register() {
  const [stageIndex, setStageIndex] = useState(0);

  const [error, setError] = useState();


  const handleNextStage = () => {
    setStageIndex(stageIndex + 1)
  }

  
  const formik = useFormik(registerConfig(registerUser, setError))
  
  console.log(!!formik.values.birthdate && !formik.errors.birthdate)
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
        {(!!formik.values.first_name &&  !formik.errors.first_name) &&
        (!!formik.values.last_name && !formik.errors.last_name) &&
        (!!formik.values.password && !formik.errors.password) &&
        stageIndex === 0 ? (
          <FormButton id='btnStageOne' handler={handleNextStage} />
        ) : null}
        {(!!formik.values.country && !formik.errors.country) &&
        (!!formik.values.document_type && !formik.errors.document_type) &&
        (!!formik.values.document_number && !formik.errors.document_number) &&
        (!formik.errors.birthdate && !!formik.values.birthdate) &&
        stageIndex === 1 ? (
          <FormButton id='btnStageTwo' handler={handleNextStage} />
        ) : null}
        {(!!formik.values.address && !formik.errors.address) &&
        (!!formik.values.local_address && !formik.errors.local_address) &&
        (!!formik.values.postal_code && !formik.errors.postal_code) &&
        stageIndex === 2 ? (
          <FormButton id='btnStageThree' handler={handleNextStage} />
        ) : null}
        {(!!formik.values.email && !formik.errors.email) && (!!formik.values.phone_number && !formik.errors.phone_number) ? (<Container>
          <FormSubmit msg={"Registrar"} />

            {error && <FormErrorResponse error={error}/>}

        </Container>
        ) : null}
      </ButtonWrap>
    </FormStyle>
  )
}
export default Register
