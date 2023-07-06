import React from "react";

import CustomInput from "./CustomInput";

function FormStage({fields, formObject}) {
  return <>

        {
            fields.map((field, index)=>(
                <div key={index}>
                
                    <CustomInput  label={field.label} id={field.id} type={field.type} formik={formObject} />
                </div>
            ))
        }

  </>
}

export default FormStage;
