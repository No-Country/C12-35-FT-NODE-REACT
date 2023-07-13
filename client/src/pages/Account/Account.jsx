import React from "react";
import { FormWrap } from "./style";
import { Register, Login } from "@/modules/Forms";

function Account({type}) {

    if(type == 'Register') return(<FormWrap>
        <Register/>
    </FormWrap>)

    if(type == 'Login') return(<FormWrap>
        <Login/>
    </FormWrap>)
  return 
}

export default Account;
