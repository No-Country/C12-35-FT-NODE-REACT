import React from "react";
import { ErrorWraper, Input, InputWrapper, Label } from "./style";

function InputForm({
  children,
  formik,
  id,
  composeEventHandlers,
  error,
  touched,
  isFocused,
  setIsFocused,
  width
}) {
  return (
    <InputWrapper >
      <Label htmlFor={id} $isVisible={isFocused === id && true}>
        {children}
      </Label>
      <Input
        id={id}
        type="text"
        placeholder={isFocused === id ? "" : children}
        {...formik.getFieldProps(id)}
        onFocus={() => setIsFocused(id)}
        onBlur={composeEventHandlers(formik.getFieldProps(id).onBlur, () =>
          setIsFocused(false)
        )}
        $error={touched && error && true}
      />
      {touched && error ? <ErrorWraper>{error}</ErrorWraper> : null}
    </InputWrapper>
  );
}

export default InputForm;
