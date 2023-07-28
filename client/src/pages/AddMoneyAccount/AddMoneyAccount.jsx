import { FormControlNumber } from "@/components"
import { EstructureCards, ReusableForm } from "@/modules"
import { useIcons } from "@@/global/customIcons"
import { addMoney } from "@@/queries"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import * as Yup from "yup"

export default function AddMoneyAccount() {
  //params
  const { card } = useParams()
  //redux
  const dispatch = useDispatch()

  //hooks
  const { MoneyBillTransfer } = useIcons()

  //initial values
  const initialValues = {
    amount: 0,
    currency: "ARS"
  }

  //validation schema
  const validationSchema = Yup.object().shape({
    amount: Yup.number("Debe ser un número")
      .required("Ingresá un monto")
      .min(1, "El monto debe ser mayor a 0")
  })

  //constants
  const messageStage = {
    true: "¿Cuánto dinero queres ingresar?",
    false: "Ingresá el monto que deseas ingresar"
  }

  //states
  const [isReady, setIsReady] = useState(true)
  const [error, setError] = useState(false)

  //onsubmit handler
  const onSubmit = async (values) => {
    try {
      const data = await dispatch(
        addMoney({
          ...values
        })
      )
      if (data.payload.error === false) {
        setError(false)
        return
      } else {
        setError(true)
        return
      }
    } catch (error) {
      setError(true)
    }
  }

  return (
    <EstructureCards
      returnRoute='/app/addfunds/method'
      icon={<MoneyBillTransfer />}
      title={messageStage[isReady]}>
      <ReusableForm
        title='Ingresar fondos'
        text='Fondo ingresado con éxito'
        textOnLoad='Ingresando fondos...'
        onSubmitProp={onSubmit}
        isReady={isReady}
        initialValuesProp={initialValues}
        validationSchemaProp={validationSchema}
        error={error}
        errorMsg='¡Ups! Algo salió mal.'
        enableReinitialize>
        <FormControlNumber required name='amount' placeholder='$ 0,00' />
      </ReusableForm>
    </EstructureCards>
  )
}
