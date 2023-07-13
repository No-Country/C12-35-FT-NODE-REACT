import React from "react";
import { FormWrap } from "./style";

import {Register} from "@/modules/Forms/Register";
import {Login} from "@/modules/Forms/Login";

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
