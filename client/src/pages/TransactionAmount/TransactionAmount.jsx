import React from "react"
import { useParams } from "react-router-dom"
import { Button, FormControlNumber } from "@/components"
import { EstructureCards, ReusableForm } from "@/modules"
import { useIcons } from "@@/global/customIcons"
import * as Yup from "yup"
import { useSelector } from "react-redux"

export default function TransactionAmount() {
  //params
  const { identifier } = useParams()

  //redux
  const { balance } = useSelector((state) => state.auth)

  //hooks
  const { MoneyBillTransfer } = useIcons()

  //initial values
  const initialValues = {
    amount: 0
  }

  //validation schema
  const validationSchema = Yup.object().shape({
    amount: Yup.number("Debe ser un número")
      .required("Ingresá un monto")
      .min(1, "El monto debe ser mayor a 0")
      .max(balance, "¡Ups! No tenés saldo suficiente.")
  })

  //prop components
  const submitButtonComp = (disabled) => {
    return (
      <Button type='submit' disabled={disabled} primaryInverse>
        Siguiente
      </Button>
    )
  }

  //onsubmit handler
  const onSubmit = (values) => {
    console.log({ amount: values.amount, identifier })
  }

  return (
    <EstructureCards
      returnRoute='/app/transf/int'
      icon={<MoneyBillTransfer />}
      title='Ingresá el monto que deseas transferir'>
      <ReusableForm
        onSubmitProp={onSubmit}
        submitButton={submitButtonComp()}
        submitButtonDisabled={submitButtonComp(true)}
        initialValuesProp={initialValues}
        validationSchemaProp={validationSchema}
        enableReinitialize>
        <FormControlNumber required name='amount' placeholder='$ 0,00' />
      </ReusableForm>
    </EstructureCards>
  )
}
