import { useState } from "react";
import useAccountFund from "./useAccountFund";
import { AvailableCredict, ModalCvc } from "@/components";

function AccountFunt() {
  const {
    isOpen,
    isVisible,
    handleClickCvc,
    handleClickEye,
    stopPropagation,
    handleClipBoard,
  } = useAccountFund();

  const [state, setState] = useState({
    cvu: "1234-4567-8912-3456",
    alias: "Pepe",
  });
  return (
    <>
      <ModalCvc
        isOpen={isOpen}
        handleClipBoard={handleClipBoard}
        handleClickCvc={handleClickCvc}
        stopPropagation={stopPropagation}
        state={state}
      />
      <AvailableCredict
        isVisible={isVisible}
        handleClickCvc={handleClickCvc}
        handleClickEye={handleClickEye}
      />
    </>
  );
}

export default AccountFunt;
