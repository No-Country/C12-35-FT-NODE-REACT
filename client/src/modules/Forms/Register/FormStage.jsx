import { FormInput } from "@/components"
import React from "react"
import { Stage } from "./style"

function FormStage({ fields, formObject }) {
  return (
    <>
      {fields.map((field, index) => (
        <Stage key={index}>
          <FormInput
            label={field.label}
            id={field.id}
            type={field.type}
            formik={formObject}
          />
        </Stage>
      ))}
    </>
  )
}

export default FormStage
