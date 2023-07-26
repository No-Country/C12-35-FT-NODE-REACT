import { Formik } from "formik"
import React from "react"
import { VerticalFlex } from "./style"

export default function ReusableForm({
  initialValuesProp,
  validationSchemaProp,
  children,
  submitButton,
  submitButtonDisabled,
  onSubmitProp
}) {
  //intial values
  const initialValues = {
    ...initialValuesProp
  }

  //validation schema
  const validationSchema = validationSchemaProp

  //handler
  const onSubmit = (values) => {
    onSubmitProp(values)
  }

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}>
      {(formik) => (
        <form onSubmit={formik?.handleSubmit}>
          <VerticalFlex>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { formik })
            })}
            {!formik?.isSubmitting ? submitButton : submitButtonDisabled}
          </VerticalFlex>
        </form>
      )}
    </Formik>
  )
}
