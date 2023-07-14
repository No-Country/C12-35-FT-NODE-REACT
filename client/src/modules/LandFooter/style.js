import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  color: white;
  z-index: 10;
  margin: 0 5vw;
  width: 90vw;
  border-top: 1px solid #888;
`

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 20%;
  padding: 0 0 10% 0;
  translate: -10% 0;
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
`

export const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Item = styled.div`
  width: 10%;
`

export const Copyright = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  color: #888;
  margin: -40px 0 20px 0;
`