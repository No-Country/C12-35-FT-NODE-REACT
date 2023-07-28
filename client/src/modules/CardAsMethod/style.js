import styled from "styled-components"

const gradientsTypeBank = {
  MASTERCARD: "var(--gradient-mastercard)",
  VISA: "var(--gradient-visa)",
  "AMERICAN EXPRESS": "var(--gradient-american-express)"
}

const widthImage = {
  MASTERCARD: "60px",
  VISA: "60px",
  "AMERICAN EXPRESS": "80px"
}

const borderImage = {
  MASTERCARD: null,
  VISA: null,
  "AMERICAN EXPRESS": "4px"
}

export const CardAsMethodWrapper = styled.div`
  height: 100px;
  width: 100%;
  background: ${({ bank_branding }) =>
    bank_branding && gradientsTypeBank[bank_branding]};
  padding: 10px;
  border-radius: var(--radius-light);
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.25);
  }
`

export const CardAsMethodWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const CardNumber = styled.div`
  width: auto;
  display: inline-block;
  padding: 5px 10px;
  background-color: var(--background-opacity);
  font-weight: 700;
  letter-spacing: 0.4px;
  border-radius: var(--radius-superlight);
`

export const CardExpiration = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 0.8rem;
  font-weight: 600;
`

export const CardBankLogo = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  & img {
    width: ${({ bank_branding }) => widthImage[bank_branding]};
    border-radius: ${({ bank_branding }) => borderImage[bank_branding]};
  }
`
