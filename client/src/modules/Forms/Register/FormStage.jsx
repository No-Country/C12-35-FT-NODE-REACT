import { FormInput } from "@/components"
import React from "react"
import { Stage } from "./style"

import {DropDown} from "@/components"


function FormStage({ fields, formObject }) {
  return (
    <Stage>
      {fields.map(({ id, label, type, data }) => (

        type !== "DropDown" ?
        <FormInput
          id={id}
          key={id}
          type={type}
          formik={formObject}
          placeholder={label}
        />
        :
        <DropDown key={id} options={data} label={label} id={id} formik={formObject} />
      ))}
    </Stage>
  )
}

export default FormStage
