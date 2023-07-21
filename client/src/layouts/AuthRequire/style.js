import { ToastContainer } from "react-toastify"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  height: 100%;
  max-width: 1280px;
  margin: 50px auto;
  margin-top: 160px;
`

export const Wrap = styled.div`
  grid-column: 6 / 25;
  grid-row: 6 / 2;
`

export const StyledToastContainer = styled(ToastContainer)`
  & .Toastify__toast-theme--colored.Toastify__toast--success {
    background: var(--alert-primary);
    border-radius: var(--radius-light);
    font-size: 0.9rem;
    text-align: center;
    min-height: auto;
  }
`
