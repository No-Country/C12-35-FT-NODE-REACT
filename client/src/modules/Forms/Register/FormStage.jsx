import { FormInput } from "@/components"
import React from "react"
import { Stage } from "./style"

function FormStage({ fields, formObject }) {
  return (
    <Stage>
      {fields.map(({ id, label, type }) => (
        <FormInput
          id={id}
          key={id}
          type={type}
          formik={formObject}
          placeholder={label}
        />
      ))}
    </Stage>
  )
}

export default FormStage
