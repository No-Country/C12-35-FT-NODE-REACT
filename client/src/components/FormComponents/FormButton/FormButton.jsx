import React from "react";
import { Button } from "./style";

function FormButton({id, handler, msg}) {
  return <Button id={id} type='button' onClick={handler}>{msg}</Button>
}

export default FormButton;
