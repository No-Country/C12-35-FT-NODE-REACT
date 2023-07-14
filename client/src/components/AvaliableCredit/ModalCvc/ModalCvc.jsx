import { ContainerModal, DivGeneric, Text } from "../style"
import { BiCopy } from "react-icons/bi"
function ModalCvc({
  isOpen,
  handleClickCvc,
  handleClipBoard,
  state,
  stopPropagation
}) {
  return (
    <ContainerModal
      $isOpen={isOpen}
      $position='fixed'
      $top='0'
      $left='0'
      $width='100%'
      $height='100vh'
      $backGroundColor='rgba(39, 25, 25, 0.331)'
      $justifyC='center'
      $aItems='center'
      onClick={handleClickCvc}>
      <DivGeneric
        onClick={stopPropagation}
        $width='30%'
        $backGroundColor='white'
        $fDireccion='column'
        $padding='2rem'
        $bRadius='10px'>
        <DivGeneric $gap='1rem'>
          <Text>cvu: {state.cvu}</Text>
          <DivGeneric
            $width='2rem'
            $cursor='pointer'
            onClick={() => handleClipBoard(state.cvu)}
            $aItems='center'>
            <BiCopy />
          </DivGeneric>
        </DivGeneric>
        <DivGeneric $gap='1rem'>
          <Text>alias: {state.alias}</Text>
          <DivGeneric
            $width='2rem'
            $cursor='pointer'
            onClick={() => handleClipBoard(state.alias)}
            $aItems='center'>
            <BiCopy />
          </DivGeneric>
        </DivGeneric>
      </DivGeneric>
    </ContainerModal>
  )
}

export default ModalCvc
