import { LoadingButton } from "@/components"
import { Formik } from "formik"
import React, { useState } from "react"
import { VerticalFlex } from "./style"

export default function ReusableForm({
  initialValuesProp,
  validationSchemaProp,
  children,
  submitButton,
  submitButtonDisabled,
  onSubmitProp,
  isReady,
  title,
  text,
  textOnLoad,
  error,
  errorMsg
}) {
  //intial values
  const initialValues = {
    ...initialValuesProp
  }

  //states
  const [isReadyState, setIsReadyState] = useState(isReady)

  //validation schema
  const validationSchema = validationSchemaProp

  //handler
  const onSubmit = (values) => {
    onSubmitProp(values, setIsReadyState)
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
            {!formik?.isSubmitting
              ? submitButton
              : submitButtonDisabled
              ? isReadyState
              : null}
            {isReadyState && (
              <LoadingButton
                error={error}
                errorMsg={errorMsg}
                type='submit'
                title={title}
                text={text}
                textOnLoad={textOnLoad}
              />
            )}
          </VerticalFlex>
        </form>
      )}
    </Formik>
  )
}
