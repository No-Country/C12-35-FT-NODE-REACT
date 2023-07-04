import React from "react";

export default function CustomInput({id, label, type, formik}) {

  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type={type} onChange={formik.handleChange} value={formik.values[id]} />
        {formik.errors[id] ? <span>{formik.errors[id]}</span> : <></>}
    </div>
  )
}
