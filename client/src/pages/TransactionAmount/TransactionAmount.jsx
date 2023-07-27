import { Button, FormControlNumber } from "@/components"
import { EstructureCards, ReusableForm } from "@/modules"
import { useIcons } from "@@/global/customIcons"
import { createTransaction, verifyUserAccount } from "@@/queries"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import * as Yup from "yup"
import {
  StyleAccount,
  Amount,
  DestinationAccountWrap,
  DestinationAccountWrapper
} from "./style"

export default function TransactionAmount() {
  //params
  const { identifier } = useParams()

  //redux
  const { balance } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

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

  //constants
  const messageStage = {
    true: "¿Los datos son correctos?",
    false: "Ingresá el monto que deseas transferir"
  }

  //states
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState(false)
  const [values, setValues] = useState(null)
  const [desinationAccount, setDestinationAccount] = useState(null)

  //onsubmit handler
  const onSubmit = async (values, setReady) => {
    values ? setIsReady(true) : setIsReady(false)
    values ? setReady(true) : setReady(false)
    values ? setValues(values) : setValues(null)
    let extra

    try {
      if (isReady) {
        const data = await dispatch(
          createTransaction({
            ...values,
            identifier: identifier.replace(/-/g, ".")
          })
        )

        console.log(data)

        if (data.payload.error === false) {
          setError(false)
          return
        } else {
          setError(true)
          return
        }
      } else null
    } catch (error) {
      setError(true)
    }
  }

  //functions
  const formatter = (value) =>
    new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2
    }).format(value)

  //effects
  useEffect(() => {
    try {
      dispatch(
        verifyUserAccount({ identifier: identifier.replace(/-/g, ".") })
      ).then(({ payload }) => {
        setDestinationAccount(payload.data)
      })
    } catch (error) {}
  }, [identifier])

  return (
    <EstructureCards
      returnRoute='/app/transf/int'
      icon={<MoneyBillTransfer />}
      title={messageStage[isReady]}>
      <ReusableForm
        title='Realizar transferencia'
        text='Transferencia realizada'
        textOnLoad='Realizando transferencia...'
        onSubmitProp={onSubmit}
        submitButton={submitButtonComp()}
        submitButtonDisabled={submitButtonComp(true)}
        initialValuesProp={initialValues}
        validationSchemaProp={validationSchema}
        error={error}
        errorMsg='¡Ups! Algo salió mal.'
        enableReinitialize>
        {!isReady ? (
          <FormControlNumber required name='amount' placeholder='$ 0,00' />
        ) : (
          <DestinationAccountWrapper>
            <DestinationAccountWrap>
              <Amount>
                <span>Monto a transferir</span>
                <div>{formatter(values?.amount)}</div>
              </Amount>
              <StyleAccount>
                <span>Para</span>
                <div>{desinationAccount?.fullname}</div>
                <div>CVU {desinationAccount?.cvu}</div>
                <div>Alias {desinationAccount?.alias}</div>
              </StyleAccount>
            </DestinationAccountWrap>
          </DestinationAccountWrapper>
        )}
      </ReusableForm>
    </EstructureCards>
  )
}
