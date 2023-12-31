import React from "react";
import { ButtonWraper } from "./style";
import { ButtonLink } from "@/components";
import { IoIosAddCircle } from "react-icons/io";
import { HiPencil } from "react-icons/hi";

function Buttons() {
  return (
    <ButtonWraper>
      <ButtonLink
        path="/app/cards/addCard"
        backgroundColor="var(--primary-opacity)"
        color="var(--primary)"
        width="50%"
      >
        <IoIosAddCircle size="2rem" />
        Agregar tarjetas
      </ButtonLink>
      <ButtonLink
        backgroundColor="var(--background-light)"
        color="var(--primary-opacity)"
        width="50%"
      >
        <HiPencil size="2rem" />
        Modificar Tarjetas
      </ButtonLink>
    </ButtonWraper>
  );
}

export default Buttons;
