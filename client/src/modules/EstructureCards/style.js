import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`

export const Wrap = styled.article`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`

export const Header = styled.div`
  padding: 20px 30px;
  border-radius: var(--radius-cards);
  background-color: var(--background-card);
  display: flex;
  align-items: center;
  gap: 30px;

  & h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  & span {
    display: flex;
    align-items: center;
    font-size: 2rem;
    padding: 8px;
    border-radius: var(--radius-full);
    background-color: var(--background-icon);
    color: var(--primary);
  }
`

export const Content = styled.div`
  border-radius: var(--radius-cards);
  background-color: var(--background-card);
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 10px;
`

export const Additions = styled.div`
  padding: 20px 10px;
  border-radius: var(--radius-cards);
  background-color: var(--background-card);
  display: flex;
  flex-direction: column;
  gap: 10px;
`
