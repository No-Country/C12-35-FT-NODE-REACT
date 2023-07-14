import styled from "styled-components";


export const FormWrap = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;

    z-index: 10;
    
`

export const PageStyle = styled.section`
  margin: 0;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 1;
`
export const Background = styled.div`
    position: fixed;
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    
    z-index: -1;

    & img{
      min-height: 100vh;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
`
export const BackgroundBlur = styled.div`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 1;
`