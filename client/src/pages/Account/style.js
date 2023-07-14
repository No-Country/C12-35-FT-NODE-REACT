import styled from "styled-components"

export const PageStyle = styled.section`
  height: 100%;
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 100px 0 0 0;
`

export const FormWrap = styled.div`
  height: 100%;
  min-height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const BackGroundImage = styled.img`
  height: auto;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
`
export const BackgroundBlur = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--background-blur-layout);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  z-index: -1;
`
