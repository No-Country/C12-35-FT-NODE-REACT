import {
  DivGeneric,
  FooterGeneric,
  HeaderGeneric,
  StyleButton,
  StyledLiLink,
  StyledUlLink,
  Text
} from "./style"
import { AiOutlineEye } from "react-icons/ai"

function AvailableCredict({
  handleClickEye,
  handleClickCvc,
  state,
  isVisible
}) {
  return (
    <DivGeneric $padding='1rem' $fDireccion='column'>
      <HeaderGeneric $justifyC='space-between' $aItems='center'>
        <Text>Dinero Disponible</Text>
        <StyleButton
          $fontSize='0.7rem'
          $height='1.4rem'
          $width='5rem'
          $cursor='pointer'
          $bRadius='4px'
          onClick={handleClickCvc}>
          Mis datos
        </StyleButton>
      </HeaderGeneric>
      <DivGeneric>
        <DivGeneric>
          {isVisible && (
            <Text $fontSize='2.3rem' $margin='0' $width='7rem'>
              {state || "$ 0,00"}
            </Text>
          )}
          <DivGeneric
            $width='30%'
            $aItems='center'
            onClick={handleClickEye}
            $cursor='pointer'>
            <AiOutlineEye />
          </DivGeneric>
        </DivGeneric>
      </DivGeneric>
    </DivGeneric>
  )
}

export default AvailableCredict
