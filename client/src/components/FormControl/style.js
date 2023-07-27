import styled from "styled-components"
import { Field } from "formik"

export const FormControlWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: ${({ $short }) => ($short ? "calc(50% - 20px)" : "100%")};
  align-items: flex-start;
  flex-grow: 1;
`

export const CustomField = styled(Field).attrs({
  as: "input"
})`
  width: 100%;
  border-radius: var(--radius-light);
  background-color: ${(props) =>
    props.error ? "var(--color-error-dark)" : "var(--background-light)"};
  color: var(--text-primary);
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: ${(props) =>
    props.error
      ? "2px solid var(--color-error)"
      : "2px solid var(--background-light)"};
`

export const CustomLabel = styled.label`
  position: absolute;
  left: ${({ error }) => (error ? "5px" : "20px")};
  top: ${({ error }) => (error ? "-24px" : "12px")};
  font-size: ${({ error }) => (error ? "0.9rem" : null)};
  color: ${({ error }) =>
    error ? "var(--text-primary)" : "var(--text-primary-light)"};
  pointer-events: none;
  transition: 0.5s;

  ${CustomField}:focus ~ & {
    left: 5px;
    font-size: 0.9rem;
    color: var(--text-primary);
    top: -24px;
  }
  ${CustomField}:valid ~ & {
    left: 5px;
    font-size: 0.9rem;
    color: var(--text-primary);
    top: -24px;
  }
`
export const ErrorMessage = styled.span`
  color: var(--color-error);
  font-size: 0.9rem;
  padding-left: 5px;
`
