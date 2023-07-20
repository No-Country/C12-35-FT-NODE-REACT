import React from "react";
import { FormInput } from "@/components";
import { Stage } from "./style";
import { DropDown } from "@/components";
import { InputPasswordCustom } from "@/components";

function FormStage({ fields, formObject }) {
  return (
    <Stage>
      {fields.map(({ id, label, type, data }, index) => (
        type !== "DropDown" && id !== "password" ? (
          <FormInput
            key={id}
            id={id}
            type={type}
            formik={formObject}
            placeholder={label}
          />
        ) : type === "DropDown" ? (
          <DropDown
            key={id}
            options={data}
            label={label}
            id={id}
            formik={formObject}
          />
        ) : (
          <InputPasswordCustom
            key={id}
            register={true}
            id={id}
            type={"text"}
            formik={formObject}
            label={label}
          />
        )
      ))}
    </Stage>
  );
}

export default FormStage;