import React, { useEffect, useState } from "react";
import { ButtonWrap, ContainerError } from "./style";
import {FormButton, FormSubmit, FormErrorResponse} from "@/components";

function ButtonRender({formik, index, setIndex, fields, error, lastStage}) {

    const errors = formik.errors

    const values = formik.values

    const fieldsId = [...fields.map(obj => obj.id)]



    console.log(errors)
  return (
    <ButtonWrap>
        {
            fieldsId.map(field=> !!values[field]).every(el=> el === true) && 
            fieldsId.map(field=> !errors[field]).every(el=> el === true) && (
                index !== lastStage ? 
                <FormButton id='btnStageTwo' handler={setIndex} msg='Siguiente' />
                :
                (
                    <ContainerError>
                    <FormSubmit msg={"Registrar"} />
                    {error && <FormErrorResponse error={error} />}
                    </ContainerError>
                )
            ) || (
                index !== lastStage ?
                <FormButton disabled={true} msg='Siguiente'/>
                :
                <FormButton disabled={true} msg='Registrar'/>
            )
        }
    </ButtonWrap>
  )
}

export default ButtonRender;
