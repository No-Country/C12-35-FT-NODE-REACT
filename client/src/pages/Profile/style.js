import styled from "styled-components"

export const ProfileWrapper = styled.section`
  width: 100%;
  height: 100%;
`

export const ProfileWrap = styled.article`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
`

export const ProfileHeader = styled.div`
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

export const AccountInfo = styled.div`
  padding: 30px;
  border-radius: var(--radius-cards);
  background-color: var(--background-card);
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const UserTools = styled.div`
  padding: 20px 10px;
  border-radius: var(--radius-cards);
  background-color: var(--background-card);
  display: flex;
  flex-direction: column;
  gap: 10px;
`
