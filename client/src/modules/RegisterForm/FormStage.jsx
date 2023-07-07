import React from "react";

import { FormInput } from "@/components";

function FormStage({fields, formObject}) {
  return <>

        {
            fields.map((field, index)=>(
                <div key={index}>
                
                    <FormInput  label={field.label} id={field.id} type={field.type} formik={formObject} />
                </div>
            ))
        }

  </>
}

export default FormStage;
