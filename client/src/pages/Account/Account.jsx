import React from "react"
import { BackGroundImage, BackgroundBlur, FormWrap, PageStyle } from "./style"
import { Register, Login } from "@/modules/Forms"
import { LandHeader } from "@/modules"
import wavesBg from "@/assets/images/illustrations/waves.svg"

function Account({ type }) {
  return (
    <>
      <LandHeader />
      <PageStyle>
        <BackGroundImage src={wavesBg} />
        <BackgroundBlur />
        <FormWrap>{type === "Register" ? <Register /> : <Login />}</FormWrap>
      </PageStyle>
    </>
  )
}

export default Account
