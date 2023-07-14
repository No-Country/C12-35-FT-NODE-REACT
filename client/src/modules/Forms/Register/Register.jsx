import { FormButton, FormSubmit } from "@/components"
import { registerConfig, stagesEstructure } from "@@/global/FormikConfig"
import { registerUser } from "@@/queries"
import { useFormik } from "formik"
import React, { useState } from "react"
import FormStage from "./FormStage"
import {
  ButtonWrap,
  ContainerError,
  FormStyle,
  FormWrap,
  Message,
  SectionForm,
  Title,
  WelcomeLogo
} from "./style"
import { IoPersonCircle } from "react-icons/io5"

import { FormErrorResponse } from "@/components"

function Register() {
  const [stageIndex, setStageIndex] = useState(0)

  const [error, setError] = useState()

  const handleNextStage = () => {
    setStageIndex(stageIndex + 1)
  }

  const formik = useFormik(registerConfig(registerUser, setError))

  console.log(!!formik.values.birthdate && !formik.errors.birthdate)
  return (
    <FormWrap>
      <SectionForm>
        <WelcomeLogo>
          <IoPersonCircle />
        </WelcomeLogo>
        <Title>Necesitamos tus datos personales</Title>
        <Message>
          Necesitamos tus datos personales para continuar con el registro.
        </Message>
      </SectionForm>
      <FormStyle onSubmit={formik.handleSubmit}>
        {stagesEstructure.map((stage, index) => (
          <div
            key={index}
            style={{ display: index === stageIndex ? "block" : "none" }}>
            <FormStage fields={stage.fields} formObject={formik} />
          </div>
        ))}
        <ButtonWrap>
          {!!formik.values.first_name &&
          !formik.errors.first_name &&
          !!formik.values.last_name &&
          !formik.errors.last_name &&
          !!formik.values.password &&
          !formik.errors.password &&
          stageIndex === 0 ? (
            <FormButton id='btnStageOne' handler={handleNextStage} />
          ) : (
            stageIndex === 0 && <FormButton disabled></FormButton>
          )}
          {!!formik.values.country &&
          !formik.errors.country &&
          !!formik.values.document_type &&
          !formik.errors.document_type &&
          !!formik.values.document_number &&
          !formik.errors.document_number &&
          !formik.errors.birthdate &&
          !!formik.values.birthdate &&
          stageIndex === 1 ? (
            <FormButton id='btnStageTwo' handler={handleNextStage} />
          ) : stageIndex === 1 ? (
            <FormButton disabled></FormButton>
          ) : null}
          {!!formik.values.address &&
          !formik.errors.address &&
          !!formik.values.local_address &&
          !formik.errors.local_address &&
          !!formik.values.postal_code &&
          !formik.errors.postal_code &&
          stageIndex === 2 ? (
            <FormButton id='btnStageThree' handler={handleNextStage} />
          ) : (
            stageIndex === 2 && <FormButton disabled></FormButton>
          )}
          {!!formik.values.email &&
            !formik.errors.email &&
            !!formik.values.phone_number &&
            !formik.errors.phone_number && (
              <ContainerError>
                <FormSubmit msg={"Registrar"} />
                {error && <FormErrorResponse error={error} />}
              </ContainerError>
            )}
        </ButtonWrap>
      </FormStyle>
    </FormWrap>
  )
}
export default Register
