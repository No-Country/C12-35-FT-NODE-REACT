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
  WelcomeLogo,
} from "./style"
import { IoPersonCircle } from "react-icons/io5";


import { FormErrorResponse } from "@/components"

function Register() {
  const [stageIndex, setStageIndex] = useState(0)

  const [error, setError] = useState()

  const handleNextStage = () => {
    setStageIndex(stageIndex + 1)
  }

  const formik = useFormik(registerConfig(registerUser, setError))

  console.log(formik.values)
  return (
    <FormWrap>
      <SectionForm>
        {

          stagesEstructure[stageIndex] ? <>
              <WelcomeLogo>
              <IoPersonCircle />
              </WelcomeLogo>
              <Title>{stagesEstructure[stageIndex].text.title}</Title>
              <Message>
                {stagesEstructure[stageIndex].text.message}
              </Message>
          </> : null

        }
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
          !formik.errors.birthdate &&
          !!formik.values.birthdate &&

          stageIndex === 0 ? (
            <FormButton id='btnStageOne' handler={handleNextStage} msg='Siguiente' />
          ) : (
            stageIndex === 0 && <FormButton disabled msg='Siguiente'/>
          )}
          {!!formik.values.country &&
          !formik.errors.country &&
          !!formik.values.document_type &&
          !formik.errors.document_type &&
          !!formik.values.document_number &&
          !formik.errors.document_number &&
          
          stageIndex === 1 ? (
            <FormButton id='btnStageTwo' handler={handleNextStage} msg='Siguiente' />
          ) : stageIndex === 1 ? (
            <FormButton disabled msg='Siguiente' />
          ) : null}
          {!!formik.values.address &&
          !formik.errors.address &&
          !!formik.values.local_address &&
          !formik.errors.local_address &&
          !!formik.values.postal_code &&
          !formik.errors.postal_code &&
          stageIndex === 2 ? (
            <FormButton id='btnStageThree' handler={handleNextStage} msg='Siguiente'/>
          ) : (
            stageIndex === 2 && <FormButton disabled msg='Siguiente' />
          )}
          {!!formik.values.email &&
            !formik.errors.email &&
            !!formik.values.phone_number &&
            !formik.errors.phone_number &&
            !!formik.values.password &&
            !formik.errors.password && (
              <ContainerError>
                  <FormSubmit msg={"Registrar"} />
                  {error && <FormErrorResponse error={error} />}
              </ContainerError>
            ) ||( stageIndex === 3 ? <FormButton disabled msg='Registrar'/> : null) 
          }
        </ButtonWrap>
      </FormStyle>
    </FormWrap>
  )
}
export default Register



// Refactorizar Logia de botones