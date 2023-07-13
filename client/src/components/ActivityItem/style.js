import styled from "styled-components"

export const ActivityItemWrap = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`

export const IconActivity = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--background-icon);
  border-radius: var(--radius-full);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: var(--text-primary);
`
export const GroupDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`

export const ActivityDetail = styled.h4`
  font-weight: 400;
`

export const Date = styled.span``
