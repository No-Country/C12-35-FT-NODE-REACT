import { FormControl, Button } from "@/components"
import { ReusableForm } from "@/modules"
import React, { useState } from "react"
import { validateCards } from "@@/global/FormikConfig/validateCards"
import { useDispatch } from "react-redux"
import { AddCard } from "@@/queries"

function AddCardsForm() {
  //redux
  const dispatch = useDispatch()

  //initial values
  const initialValues = {
    card_number: "",
    cardholder_name: "",
    expiration_date: "",
    cvv: "",
    type: ""
  }

  //validation schema
  const validationSchema = validateCards().validationSchema

  //prop components
  const submitButtonComp = (disabled) => {
    return (
      <Button type='submit' disabled={disabled}>
        Agregar tarjeta
      </Button>
    )
  }

  //states
  const [error, setError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isReady, setIsReady] = useState(true)

  //onsubmit handler
  const onSubmit = async (values) => {
    try {
      const data = await dispatch(AddCard(values))
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
    <ReusableForm
      title='Añadir tarjeta'
      text='Tarjeta añadida'
      textOnLoad='Agregando tarjeta...'
      onSubmitProp={onSubmit}
      initialValuesProp={initialValues}
      validationSchemaProp={validationSchema}
      error={error}
      isReady={isReady}
      errorMsg='¡Ups! Algo salió mal.'
      enableReinitialize>
      <FormControl required name='card_number' title='Número de tarjeta' />
      <FormControl required name='cardholder_name' title='Nombre del titular' />
      <FormControl short required name='type' title='Tipo de tarjeta' />

      <FormControl
        short
        required
        name='expiration_date'
        title='Fecha de expiración (MM/AA)'
      />
      <FormControl short required name='cvv' title='Código de seguridad' />
    </ReusableForm>
  )
}

export default AddCardsForm
