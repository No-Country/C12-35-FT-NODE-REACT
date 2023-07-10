import styled from 'styled-components';

const StyledCard = styled.div`
  overflow: hidden;
  background: linear-gradient(to right, #666, #999, #aaa);
  width: ${props => props.w};
  height: ${props => `calc(${props.w} * 0.63)`};
  color: #fff;
  padding: ${props => `calc(${props.w} * 0.03)`};
  border-radius: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  text-shadow: 0px 1px 2px #000;
  div {
    width: 100%;
    height: 25%;
  }
  div span {
    font-size: ${props => `calc(${props.w} * 0.07)`};
  }
  img {
    width: 25%;
  }
`;

export default StyledCard;