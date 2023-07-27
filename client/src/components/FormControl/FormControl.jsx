import React from "react"
import {
  CustomField,
  CustomLabel,
  ErrorMessage,
  FormControlWrapper
} from "./style"

export default function FormControl({ name, title, formik, required, short }) {
  const isShort = short ? true : false
  return (
    <FormControlWrapper $short={isShort}>
      <CustomField
        className={isShort ? "short" : null}
        $short={isShort}
        required={required}
        error={formik?.errors[name] && formik?.touched[name]}
        name={name}
        value={formik?.values.name}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <CustomLabel
        htmlFor={name}
        error={formik?.errors[name] && formik?.touched[name]}>
        {title}
      </CustomLabel>
      <ErrorMessage>
        {formik?.errors[name] && formik?.touched[name]
          ? formik?.errors[name]
          : null}
      </ErrorMessage>
    </FormControlWrapper>
  )
}
