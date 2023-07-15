import React from "react"
import { Input, InputWrap, SpanError } from "./style"

export default function FormInput({ id, type, formik, placeholder, register }) {
  return (
    <InputWrap $register={register}>
      <Input
        placeholder={placeholder}
        id={id}
        name={id}
        type={type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        autoComplete="off"
      />
      {formik.errors[id] && <SpanError>{formik.errors[id]}</SpanError>}
    </InputWrap>
  )
}
