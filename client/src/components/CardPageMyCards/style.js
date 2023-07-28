import styled from "styled-components"

const gradientsTypeBank = {
  MASTERCARD: "var(--gradient-mastercard)",
  VISA: "var(--gradient-visa)",
  "AMERICAN EXPRESS": "var(--gradient-american-express)"
}

const widthImage = {
  MASTERCARD: "60px",
  VISA: "60px",
  "AMERICAN EXPRESS": "70px"
}

const borderImage = {
  MASTERCARD: null,
  VISA: null,
  "AMERICAN EXPRESS": "4px"
}

export const CardWrapper = styled.div`
  box-shadow: var(--shadow-card);
  display: flex;
  align-items: end;
  justify-content: center;
  width: 17rem;
  height: 9rem;
  background: ${({ bank_branding }) =>
    bank_branding && gradientsTypeBank[bank_branding]};
  margin-right: 2rem;
  border-radius: var(--radius-light);
  padding: ${(props) => (props.$padding ? props.$padding : "")};
`
export const CustomWrap = styled.div`
  display: ${(props) => (props.$display ? props.$display : "")};
  justify-content: ${(props) =>
    props.$justifyContent ? props.$justifyContent : ""};
  align-items: ${(props) => (props.$alignItems ? props.$alignItems : "")};
  flex-direction: ${(props) => (props.$direction ? props.$direction : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  height: ${(props) => (props.$height ? props.$height : "")};

  & img {
    width: ${({ bank_branding }) => widthImage[bank_branding]};
    border-radius: ${({ bank_branding }) => borderImage[bank_branding]};
  }
`
export const TextWrap = styled.p`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "1rem")};
  font-weight: ${(props) => (props.$fontWeight ? props.$fontWeight : "")};
  color: var(--text-primary);
`
export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 1.4rem;
`
export const Span = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`
