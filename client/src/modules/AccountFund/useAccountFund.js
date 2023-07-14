import { useEffect, useState } from "react";

function useAccountFund() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleClickCvc = () =>{
        setIsOpen(isOpen ? false : true)
    }

    const handleClickEye = () =>{
        setIsVisible(isVisible ? false : true)
    }
    const stopPropagation = (e) =>{
        e.stopPropagation()
    }
    const handleClipBoard = (state) => {
        navigator.clipboard.writeText(state);
        setIsCopied(true);
      };
    
    return {
        isOpen,
        isVisible,
        handleClickCvc,
        handleClickEye,
        stopPropagation,
        handleClipBoard
    };
}

export default useAccountFund;