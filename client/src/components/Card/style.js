import styled from "styled-components"

const StyledCard = styled.div`
  overflow: hidden;
  background: linear-gradient(to right, #666, #999, #aaa);
  width: ${(props) => props.w};
  height: ${(props) => `calc(${props.w} * 0.63)`};
  color: var(--text-primary);
  padding: ${(props) => `calc(${props.w} * 0.03)`};
  border-radius: var(--radius-light);
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  text-shadow: var(--shadow-text);
  div {
    width: 100%;
    height: 25%;
  }
  div span {
    font-size: ${(props) => `calc(${props.w} * 0.07)`};
  }
  img {
    width: 25%;
  }
`

export default StyledCard
