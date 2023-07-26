import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BackTextIconWrapper, WrapperBackIcon } from "./style";

function BackButton() {
  return (
    <>
      <WrapperBackIcon>
        <AiOutlineArrowLeft size="1.5rem" color="var(--text-primary-light)" />
      </WrapperBackIcon>
      <BackTextIconWrapper>Añadir Tarjeta</BackTextIconWrapper>
    </>
  );
}

export default BackButton;
