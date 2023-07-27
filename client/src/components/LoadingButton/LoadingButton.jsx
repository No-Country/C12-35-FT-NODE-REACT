import React, { useState } from "react"
import {
  CheckIcon,
  LoadingButtonWrapper,
  LoadingSlider,
  LoadingText,
  TextOnLoad
} from "./style"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function LoadingButton({
  title,
  text,
  textOnLoad,
  type,
  error,
  errorMsg
}) {
  //states
  const [isLoading, setIsLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  //handlers
  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsLoaded(true)
    }, 3500)
  }

  return (
    <LoadingButtonWrapper
      type={type}
      className={`${isLoading ? "loading" : ""}`}
      onClick={handleSubmit}
      disabled={isLoaded}
      error={error}>
      {isLoading ? (
        <>
          <LoadingText>{textOnLoad}</LoadingText>
          <LoadingSlider />
        </>
      ) : (
        <>
          {isLoaded && !error ? (
            <TextOnLoad show={isLoaded && true}>
              {text} <BsFillCheckCircleFill />
            </TextOnLoad>
          ) : isLoaded && error ? (
            errorMsg
          ) : (
            title
          )}
        </>
      )}
    </LoadingButtonWrapper>
  )
}
