import React from "react";
import {FaQuestion} from 'react-icons/fa';
import imagotipo from '@/assets/images/logos/Imagotipo.svg';
import { HeaderWrap, ButtonHelp, LogoWrapper } from "./style";
import { DirectAccessButton } from '@/components/DirectAccessButton'

function NavForm() {
  return (
    <HeaderWrap>
        <LogoWrapper src={imagotipo} />


        <DirectAccessButton link={'/faq'} children={FaQuestion} />
    </HeaderWrap>
  )
}

export default NavForm;
