import React, { useState } from "react";
import { ActiveDropDown, DropDownItem, DropDownWrap, Label, IconWrapper, DropDownList, SpanError } from "./style";
import {RiArrowDownSLine} from "react-icons/ri"


function DropDown({options, label, id, formik}) {

    const [isActive, setIsActive] = useState(false)
    const [selected, setSelected] = useState(label)
    
    const error = formik.errors[id]

    const handlerDropDown = (e)=>{
        setIsActive(!isActive)
        
    }
    const handlerItems = (e)=>{
        
        setSelected(e.target.innerText)
        formik.setFieldValue(id,e.target.innerText)
        setIsActive(!isActive)
    }   
    

  return (
    <DropDownWrap>
        <ActiveDropDown isOpen={isActive} onClick={handlerDropDown}>
            <Label>{selected || "label"}</Label>
            <IconWrapper isRotating={isActive}>{<RiArrowDownSLine size={30} color="var(--background-icon"/>}</IconWrapper>
        </ActiveDropDown>
        { error && !isActive && <SpanError>{error}</SpanError>}
        {

            isActive ? <DropDownList>
                {
                    options.map((value, index)=>{

                        return (
                            <DropDownItem key={index} onClick={handlerItems}>{value}</DropDownItem>
                        )
                        
                    })
                }
            </DropDownList>
            :
            null
        }
    </DropDownWrap>
  )
}

export default DropDown;

