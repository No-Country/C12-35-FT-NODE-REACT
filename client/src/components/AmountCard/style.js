import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  border-radius: var(--radius-cards);
  transition: all 0.3s ease-in-out;
  background-color: var(--background-card)
`

export const UpperGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const BackArrow = styled.div`
  letter-spacing: 0px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h3 {
    font-weight: 500;
  }

  & h4 {
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--text-secondary);
  }
`

export const MiddleGroup = styled.div`

`

export const Amount = styled.input`
  min-width: 10px;
  color: var(--white);
`

export const Allowed = styled.div`
  height: 50px;
`

export const AmGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const FixedAm = styled.button`
  background-color: var(--text-primary-light);
  border-radius: var(--radius-cards);
  padding: 2px 25px;
  pointer: cursor;
  color: var(--white);

  :focus {
    background-color: var(--primary);
    color: var(--background-disabled);
  }
`

export const ActionButton = styled.button`
  width: 100%;
  margin: 20px 0 0 0;
  padding: 10px;
  background-color: var(--primary-dark);
  border-radius: var(--radius-button)
`