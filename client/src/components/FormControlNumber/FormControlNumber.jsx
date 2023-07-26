import React, { useEffect } from "react"
import {
  AvailableAmount,
  CustomFieldNumber,
  Error,
  FormControlNumberWrapper,
  Item,
  ShortcutAmounts
} from "./style"
import { useSelector } from "react-redux"

export default function FormControlNumber({
  name,
  required,
  formik,
  placeholder
}) {
  //redux
  const userData = useSelector((state) => state.auth)

  //functions
  const formatter = (value) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2
    }).format(value)

  //constants
  const shortCutsAmounts = [
    {
      value: 500
    },
    {
      value: 1000
    },
    {
      value: 1500
    }
  ]

  return (
    <FormControlNumberWrapper>
      <CustomFieldNumber
        required={required}
        placeholder={placeholder}
        error={formik?.errors[name] && formik?.touched[name]}
        name={name}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
      />
      <AvailableAmount>
        {formatter(userData?.balance)} disponibles.
      </AvailableAmount>
      {formik?.errors[name] && formik?.touched[name] ? (
        <Error>{formik?.errors[name]}</Error>
      ) : null}
      <ShortcutAmounts>
        {shortCutsAmounts.map(({ value }) => {
          return (
            <Item
              key={value}
              $active={formik?.values[name] === value}
              onClick={() => formik?.setFieldValue(name, value)}>
              {formatter(value)}
            </Item>
          )
        })}
      </ShortcutAmounts>
    </FormControlNumberWrapper>
  )
}
