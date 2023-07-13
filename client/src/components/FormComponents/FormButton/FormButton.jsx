import React from "react";
import { Button } from "./style";

function FormButton({id, handler}) {
  return <Button id={id} type='button' onClick={handler}>Siguiente</Button>
}

export default FormButton;
