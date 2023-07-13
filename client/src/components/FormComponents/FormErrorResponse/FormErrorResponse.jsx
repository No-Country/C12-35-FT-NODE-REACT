import React from "react";
import { Error } from "./style";

function FormErrorResponse({error}) {
  return <Error>{error}</Error>;
}

export default FormErrorResponse;
