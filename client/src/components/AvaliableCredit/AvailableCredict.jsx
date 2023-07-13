import {
  DivGeneric,
  FooterGeneric,
  HeaderGeneric,
  StyleButton,
  StyledLiLink,
  StyledUlLink,
  Text,
} from "./style";
import { AiOutlineEye } from "react-icons/Ai";

function AvailableCredict({ handleClickEye, handleClickCvc, state }) {
  return (
    <DivGeneric $padding="1rem" $width="300px" $fDireccion="column">
      <HeaderGeneric $justifyC="space-between" $aItems="center">
        <Text>Dinero Disponible</Text>
        <StyleButton
          $fontSize="0.7rem"
          $height="1.4rem"
          $width="5rem"
          $cursor="pointer"
          $bRadius="4px"
          onClick={handleClickCvc}
        >
          Mis datos
        </StyleButton>
      </HeaderGeneric>
      <DivGeneric>
        <DivGeneric>
          <Text $fontSize="2.3rem" $margin="0" $width="7rem">
            {state || "$ 0,00"}
          </Text>
          <DivGeneric
            $width="30%"
            $aItems="center"
            onClick={handleClickEye}
            $cursor="pointer"
          >
            <AiOutlineEye />
          </DivGeneric>
        </DivGeneric>
      </DivGeneric>
      <FooterGeneric>
        <StyledUlLink>
          <StyledLiLink
            $bRadius="4px"
            $backGroundColor="green"
            $padding="0.3rem"
            $width="50%"
          >
            <Text $margin="0" $textA="center" $textC="white">
              Ingresar dinero
            </Text>
          </StyledLiLink>
          <StyledLiLink
            $bRadius="4px"
            $backGroundColor="green"
            $padding="0.3rem"
            $width="50%"
          >
            <Text $margin="0" $textA="center" $textC="white">
              Transferir dinero
            </Text>
          </StyledLiLink>
        </StyledUlLink>
      </FooterGeneric>
    </DivGeneric>
  );
}

export default AvailableCredict;
