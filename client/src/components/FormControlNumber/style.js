import styled from "styled-components"
import { Field } from "formik"

export const FormControlNumberWrapper = styled.div`
  position: relative;
  margin-top: 30px;
`

export const CustomFieldNumber = styled(Field).attrs({
  as: "input",
  type: "number"
})`
  position: relative;
  width: 100%;
  text-align: center;
  color: ${({ error }) =>
    error ? "var(--color-error)" : "var(--text-primary)"};
  font-size: 2.5rem;
  font-weight: 500;

  &::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: ${({ error }) =>
      error ? "var(--color-error)" : "var(--text-primary)"};
  }
`

export const Error = styled.span`
  display: block;
  text-align: center;
  color: var(--color-error);
  font-size: 0.85rem;
`

export const AvailableAmount = styled.span`
  display: block;
  text-align: center;
  color: var(--text-primary-light);
  font-size: 0.85rem;
`
export const ShortcutAmounts = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const Item = styled.span`
  cursor: pointer;
  padding: 4px 30px;
  color: ${(props) =>
    props.$active ? "var(--primary)" : "var(--text-primary)"};
  font-size: 0.9rem;
  border-radius: var(--radius-cards);
  background-color: ${(props) =>
    props.$active ? "var(--primary-opacity)" : "var(--background-badge)"};
`
