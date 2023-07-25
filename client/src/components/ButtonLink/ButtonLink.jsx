import React from "react";
import { LinkWrapper } from "./style";

function ButtonLink({ children, width, backgroundColor, color, path }) {
  return (
    <LinkWrapper
      to={path}
      $width={width}
      $backgroundColor={backgroundColor}
      $color={color}
    >
      {children}
    </LinkWrapper>
  );
}

export default ButtonLink;
