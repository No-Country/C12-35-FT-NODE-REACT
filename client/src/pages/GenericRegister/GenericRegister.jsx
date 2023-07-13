import React, { useState } from "react"
import * as Yup from "yup"

export default function GenericRegister() {
  //constants / initial values
  const initialValues = {
    username: ""
  }

  //states
  const [state, setState] = useState(null)
  const [error, setError] = useState(null)

  //functions
  const onSubmit = (values) => {
    registerUser(values, setState(), setError())
  }
  //validation schemas
  const validationSchema = Yup.object().shape({
    username: Yup()
      .string("Únicamente puede ser string")
      .required("Ingresa un usuario")
  })
  //handlers

  //effects

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}>
      <Form>
        <ControlFields type='email' name={"username"} isRegister={false} />
      </Form>
    </Formik>
  )
}
