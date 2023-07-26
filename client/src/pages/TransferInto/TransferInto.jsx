import { Button, FormControl } from "@/components"
import { EstructureCards, ReusableForm } from "@/modules"
import { useIcons } from "@/services/global/customIcons"
import React from "react"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"

export default function TransferInto({ formik }) {
  //navigate
  const navigate = useNavigate()
  //hooks
  const { MoneyBillTransfer } = useIcons()

  //initial values
  const initialValues = {
    identifier: ""
  }

  //validation schema
  const validationSchema = Yup.object().shape({
    identifier: Yup.string().required("Ingresá un identificador")
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
    navigate(`${values?.identifier}`)
  }

  return (
    <EstructureCards
      returnRoute='/app/transf'
      icon={<MoneyBillTransfer />}
      title='Ingresá los datos de la cuenta'>
      <ReusableForm
        onSubmitProp={onSubmit}
        submitButton={submitButtonComp()}
        submitButtonDisabled={submitButtonComp(true)}
        initialValuesProp={initialValues}
        validationSchemaProp={validationSchema}
        enableReinitialize>
        <FormControl
          required
          title='Ingresá el CBU, CVU o Alias'
          name='identifier'
        />
      </ReusableForm>
    </EstructureCards>
  )
}
