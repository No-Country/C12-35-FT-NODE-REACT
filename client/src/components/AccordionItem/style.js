import styled from 'styled-components';

export const AccordionItemContainer = styled.div`
  border-bottom: 1px solid #ccc;
  background-color: var(--background-card);
  border-radius: var(--radius-cards);
  margin-bottom: 20px;
`;

export const AccordionButton = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: left;
  color: var(--white);
  border: none;
  cursor: pointer;
  outline: none;

`;

export const AccordionContent = styled.div`
  padding: 1rem;
`;