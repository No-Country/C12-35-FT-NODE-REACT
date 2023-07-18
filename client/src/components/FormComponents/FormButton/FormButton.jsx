import React from "react";
import { Button } from "./style";

function FormButton({id, handler, msg, disabled}) {
  return <Button id={id} type='button' disabled={disabled} onClick={handler}>{msg}</Button>
}

export default FormButton;
