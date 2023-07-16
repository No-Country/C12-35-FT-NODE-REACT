import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {FormInput} from "@/components/FormComponents"
import { InputWrap, ErrorWrap, Icon } from "./style";

function InputPasswordCustom({id, type, formik, palceholder, register, error}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword= ()=>{
        setShowPassword(!showPassword)
    }

  return (
    <InputWrap>
        <FormInput
            register={register}
            palceholder={palceholder}
            id={id}
            type={showPassword ? type : 'password'}
            formik={formik}
        
        />
        <Icon isTrue={showPassword} type="button" onClick={handleShowPassword}>
            {
                showPassword ? <FaEyeSlash/> : <FaEye/>
            }
        </Icon>
    </InputWrap>

  )
}

export default InputPasswordCustom;
