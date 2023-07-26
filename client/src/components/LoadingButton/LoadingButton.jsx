import React, { useState } from "react"
import {
  CheckIcon,
  LoadingButtonWrapper,
  LoadingSlider,
  LoadingText,
  TextOnLoad
} from "./style"
import { BsFillCheckCircleFill } from "react-icons/bs"

export default function LoadingButton({ title, text, textOnLoad }) {
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
      type='button'
      className={`${isLoading ? "loading" : ""}`}
      onClick={handleSubmit}
      disabled={isLoaded}>
      {isLoading ? (
        <>
          {/* <CheckIcon show={!isLoading && true}>
            <BsFillCheckCircleFill />
          </CheckIcon> */}
          <LoadingText>{textOnLoad}</LoadingText>
          <LoadingSlider />
        </>
      ) : (
        <>
          {isLoaded ? (
            <TextOnLoad show={isLoaded && true}>
              {text} <BsFillCheckCircleFill />
            </TextOnLoad>
          ) : (
            title
          )}
        </>
      )}
    </LoadingButtonWrapper>
  )
}
