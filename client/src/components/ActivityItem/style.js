import styled from "styled-components"
const typeTransfer = {
  transfer: { width: "50%", color: "var(--secondary)" },
  send: { width: "65%", color: "var(--primary)" }
}

export const ActivityItemWrap = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;

  //posiblemente se implemente, en caso de que no se implemente, borraré
  /* &::after {
    content: "";
    width: 100%;
    height: 1.5px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 0;
    left: 0;
  } */
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

  & svg {
    width: ${({ type }) => typeTransfer[type] && typeTransfer[type].width};
    object-fit: contain;
    color: ${({ type }) => typeTransfer[type] && typeTransfer[type].color};
  }
`
export const GroupDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ActivityDetail = styled.h4`
  font-weight: 300;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & :first-child {
    opacity: 0.7;
  }

  & :nth-child(2) {
    color: var(--text-primary-light);
    font-size: 14px;
    font-weight: 400;
  }
`

export const Date = styled.span`
  font-size: 14px;
  color: var(--text-primary-light);
`

export const Amount = styled.span`
  font-size: 14px;
  color: ${({ type }) =>
    type === "send" ? typeTransfer[type].color : "var(--text-primary)"};
`
export const RightData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`
