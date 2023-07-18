import React, { useState } from "react"
import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import { registerConfig, stagesEstructure } from "@@/global/FormikConfig"
import { registerUser } from "@@/queries"
import FormStage from "./FormStage"

import {
  ButtonWrap,
  FormStyle,
  FormWrap,
  Message,
  SectionForm,
  Title,
  WelcomeLogo,
} from "./style"
import { IoPersonCircle } from "react-icons/io5";
import { ButtonRender } from "./"


function Register() {
  const [stageIndex, setStageIndex] = useState(0)

  const [error, setError] = useState()

  const dispatch = useDispatch()

  const handleNextStage = () => {
    setStageIndex(stageIndex + 1)
  }
  const onSubmit = (values) => {
      
    dispatch(registerUser(values, setError))
  } 

  const formik = useFormik({...registerConfig(), onSubmit})

  
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
          <ButtonRender formik={formik} index={stageIndex} setIndex={handleNextStage} fields={stagesEstructure[stageIndex].fields} error={error} lastStage={stagesEstructure.length - 1} />
        </ButtonWrap>
      </FormStyle>
    </FormWrap>
  )
}
export default Register