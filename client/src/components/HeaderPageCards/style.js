import styled  from "styled-components";

export const CardIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  background-color: var(--background-icon);
`;
export const TextAddCard = styled.h4`
  color: var(--text-primary);
`;
export const DetailsWrap = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
  padding:1rem;
  background-color:var(--background-card);
  border-radius:var(--radius-light);
`
