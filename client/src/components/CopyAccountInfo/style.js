import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`

export const Title = styled.h2`
  display: inline-block;
  width: 15%;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--text-primary-light);
`

export const Value = styled.span`
  font-size: 0.95rem;
  font-weight: 300;
  letter-spacing: 0.5px;
`

export const Copy = styled.button`
  rotate: 90deg;
  color: var(--text-secondary);
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.058);
  }
`
