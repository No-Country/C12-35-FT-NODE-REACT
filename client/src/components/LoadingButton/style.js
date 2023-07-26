import styled from "styled-components"

export const LoadingButtonWrapper = styled.button`
  position: relative;
  background-color: var(--primary);
  border-radius: var(--radius-light);
  font-size: 16px;
  overflow: hidden;
  margin: 30px 0;
  padding: 12px 20px;
  min-height: 49px;
  font-weight: 500;

  &:disabled {
    cursor: not-allowed;
    background-color: var(--background-disabled-dark);
    color: var(--background);
  }
`

export const LoadingSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: var(--background-disabled-dark);
  animation: loadingAnimation 3.5s ease-in-out infinite;
  z-index: 100;

  @keyframes loadingAnimation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
`
export const CheckIcon = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
`

export const TextOnLoad = styled.div`
  font-weight: 500;
  display: ${({ show }) => (show ? "block" : "none")};
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: textOnLoadAnimation ease-in-out 0.5s forwards;

  @keyframes textOnLoadAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const LoadingText = styled.span`
  position: relative;
  z-index: 2000;
`
