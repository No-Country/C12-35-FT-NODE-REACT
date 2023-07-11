import React from "react";
import { InputWrap, Label, Input, SpanError } from "./style";

export default function FormInput({id, label, type, formik}) {

  return (
    <InputWrap>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} name={id} type={type} onChange={formik.handleChange} value={formik.values[id]} />
        {formik.errors[id] ? <SpanError>{formik.errors[id]}</SpanError> : <></>}
    </InputWrap>
  )
}
