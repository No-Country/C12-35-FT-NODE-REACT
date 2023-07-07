import React from "react";

function FormButton({id, handler}) {
  return <button id={id} type='button' onClick={handler}>Siguiente</button>
}

export default FormButton;
