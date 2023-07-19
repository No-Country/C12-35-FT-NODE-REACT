import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 700px;
`

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-cards);
  padding: 0 20px;
  overflow: hidden;
  box-shadow: var(--shadow-primary);
  background-color: var(--background-card);
`
export const ListActivity = styled.ul`
  width: 100%;
  overflow-y: scroll;
  height: 90%;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`
