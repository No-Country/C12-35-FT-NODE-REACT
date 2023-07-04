import React from "react";

function FormButtonNext({id, handler}) {
  return <button id={id} type='button' onClick={handler}>Siguiente</button>
}

export default FormButtonNext;
