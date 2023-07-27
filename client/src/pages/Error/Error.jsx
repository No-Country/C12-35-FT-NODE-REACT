import {
  ErrorBox,
  BoxConteiner,
  TextError,
  ImgError,
  ConteinerInfoError,
} from "./style";
import errorImg from "../../assets/images/utils/error-page.svg";
import { Button } from "@/components";
import { Link } from "react-router-dom";

function Error() {
  const errorMessage = "¡Ups! Parece que no encontramos lo que estás buscando";
  return (
    <BoxConteiner>
      <ErrorBox>
        <ConteinerInfoError>
          <TextError>{errorMessage}</TextError>
          <ImgError src={errorImg} />
        </ConteinerInfoError>
        <Link to="/app/">
          <Button primaryInverse>Volver al inicio</Button>
        </Link>
      </ErrorBox>
    </BoxConteiner>
  );
}

export default Error;
