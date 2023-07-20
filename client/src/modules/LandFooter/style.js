import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 10;
  margin: 0 5vw;
  width: 90vw;
  border-top: 1px solid #888;

  @media (max-width: 600px) {
    margin: 0 5vw;
  }
`

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 20%;
  padding: 0 0 10% 0;
  translate: -10% 0;

  @media (max-width: 600px) {
    width: 40%;
  }
`

export const Items = styled.div`
  font-family: "Poppins";
  font-weight: 500;
  color: #D9D9D9;
  width: 30%;
  height: 300px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    height: 150px;
    padding: 0;
  }
`

export const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Item = styled.div`
  width: 10%;

  @media (max-width: 600px) {
    width: 0;
    font-size: 0.75rem;
  }
`

export const Copyright = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  color: #888;
  margin: -40px 0 20px 0;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    margin: 0 0 0 0;
  }
`