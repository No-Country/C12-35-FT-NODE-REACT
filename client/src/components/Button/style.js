import styled from "styled-components";

const bgColors = {
  $primary: "var(--primary)",
  $secondary: "var(--background-card)",
  $primaryInverse: "var(--primary)",
};

const bgDisabled = {
  $primary: "var(--primary-opacity)",
  $secondary: "var(--background-card)",
  $primaryInverse: "var(--primary-opacity)",
};

const textColors = {
  $primary: "var(--primary)",
  $secondary: "var(--primary)",
  null: "var(--primary)",
  $primaryInverse: "var(--text-tertiary)",
};

const widthStyles = {
  $primaryInverse: "100%",
};

export const ButtonWrapper = styled.button`
  padding: 12px 50px;
  border-radius: var(--radius-light);
  background-color: ${({ typeStyle }) =>
    bgColors[typeStyle] || "var(--primary-opacity)"};
  font-size: 14px;
  font-weight: 500;
  color: ${({ typeStyle }) =>
    textColors[typeStyle] || "var(--primary-opacity)"};

  width: ${({ typeStyle }) => widthStyles[typeStyle] || null};

  &:disabled {
    background-color: ${({ typeStyle }) =>
      bgDisabled[typeStyle] || "var(--primary-opacity)"};
  }
`;
