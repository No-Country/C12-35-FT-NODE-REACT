import React from "react";
import { Background, BackgroundBlur, FormWrap, PageStyle,} from "./style";
import { Register, Login } from "@/modules/Forms";
import  NavForm  from "@/modules/Forms/Header/NavForm";

import background from '@/assets/images/utils/backGround-image.jpg'

function Account({type}) {
    
    return(<PageStyle>
                  <NavForm/> 

                <Background>
                    <img src={background} alt=''  />
                </Background> 
                {/* <BackgroundBlur/> */}
                <FormWrap>
                        {                           
                            type ==='Register' ? <Register/> : <Login/>
                        }
                </FormWrap>       
        </PageStyle>)

    
}

export default Account;
