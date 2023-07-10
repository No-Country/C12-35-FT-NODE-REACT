import styled from 'styled-components';

const StyledCarousel = styled.div`
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  >* {
    margin-right: 20px;
  }
  >*:last-child {
    margin-right: 0px;
  }
`;

export default StyledCarousel;