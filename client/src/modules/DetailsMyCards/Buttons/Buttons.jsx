import React from "react";
import { ButtonWraper } from "./style";
import { useState } from "react";
import { ButtonLink } from "@/components";

function Buttons() {
  const [buttonName, setButtonName] = useState("");
  const handleClick = (e) => {
    setButtonName(e.target.name);
  };
  return (
    <ButtonWraper>
      <ButtonLink handleClick={handleClick} buttonName={buttonName} width="50%">
        Agregar tarjetas
      </ButtonLink>
      <ButtonLink handleClick={handleClick} buttonName={buttonName} width="50%">
        Modificar Tarjetas
      </ButtonLink>
    </ButtonWraper>
  );
}

export default Buttons;
