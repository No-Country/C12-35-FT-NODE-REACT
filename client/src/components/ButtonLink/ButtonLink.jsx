import React from 'react'
import { LinkWrapper } from './style';

function ButtonLink({children,width,buttonName,handleClick}) {
    return ( 
        <LinkWrapper onClick={handleClick} name={children} $width={width} $isActive={buttonName === children && true}>{children}</LinkWrapper>
     );
}

export default ButtonLink;