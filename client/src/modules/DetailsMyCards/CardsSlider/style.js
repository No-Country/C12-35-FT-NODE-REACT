import styled from "styled-components";

export const Slider = styled.div`
  display: flex;
  position: absolute;
  left: 1rem;
`;
export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 9.4rem;
  background-color: ;
  position: relative;
  cursor:pointer;
`;
export const MyCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;
export const ButtonWraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius-light);
`;
export const TitleWrap = styled.p`
  font-size: 1.2rem;
  padding: 1rem;
  color: #8e8e8e;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding-top: 0;
  padding-left: 1rem;
  padding-bottom: 1.8rem;
  padding-right:1.8rem;
  background-color: var(--background-card);
  border-radius: var(--radius-light);
`;
