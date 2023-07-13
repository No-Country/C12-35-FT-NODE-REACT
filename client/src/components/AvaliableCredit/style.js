import styled from "styled-components"

export const DivGeneric = styled.div`
  display: ${(props) => (props.$display ? props.$display : "flex")};
  flex-direction: ${(props) => (props.$fDireccion ? props.$fDireccion : "")};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  position: ${(props) => (props.$position ? props.$position : "")};
  top: ${(props) => (props.$top ? props.$top : "")};
  left: ${(props) => (props.$left ? props.$left : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  cursor: ${(props) => (props.$cursor ? props.$cursor : "")};
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
`
export const ContainerModal = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: ${(props) => (props.$fDireccion ? props.$fDireccion : "")};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  position: ${(props) => (props.$position ? props.$position : "")};
  top: ${(props) => (props.$top ? props.$top : "")};
  left: ${(props) => (props.$left ? props.$left : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  cursor: ${(props) => (props.$cursor ? props.$cursor : "")};
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
`
export const HeaderGeneric = styled.header`
  display: ${(props) => (props.$display ? props.$display : "flex")};
  flex-direction: ${(props) => (props.$fDireccion ? props.$fDireccion : "")};
  gap: ${(props) => (props.$Gap ? props.$Gap : "")};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  position: ${(props) => (props.$position ? props.$position : "")};
`
export const FooterGeneric = styled.footer`
  display: ${(props) => (props.$display ? props.$display : "flex")};
  flex-direction: ${(props) => (props.$fDireccion ? props.$fDireccion : "")};
  gap: ${(props) => (props.$Gap ? props.$Gap : "")};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  height: ${(props) => (props.$height ? props.$height : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  position: ${(props) => (props.$position ? props.$position : "")};
`
export const ButtonGeneric = styled.button`
  display: ${(props) => (props.$display ? props.$display : "")};
  border: ${(props) => (props.$border ? props.$border : "")};
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
  cursor: pointer;
  width: ${(props) => (props.$width ? props.$width : "")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "")};
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : "white"};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "")};
`
export const Text = styled.p`
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "")};
  color: ${(props) => (props.$textC ? props.$textC : "")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  text-align: ${(props) => (props.$textA ? props.$textA : "")};
`
export const StyledUlLink = styled.ul`
  display: flex;
  padding: 0;
  gap: 1rem;
  width: 100%;
  list-style: none;
`
export const StyledLiLink = styled.li`
  display: ${(props) => (props.$display ? props.$display : "")};
  justify-content: ${(props) => (props.$justifyC ? props.$justifyC : "")};
  align-items: ${(props) => (props.$aItems ? props.$aItems : "")};
  text-decoration: none;
  background-color: ${(props) =>
    props.$backGroundColor ? props.$backGroundColor : ""};
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  cursor: ${(props) => (props.$cursor ? props.$cursor : "")};
  height: ${(props) => (props.$height ? props.$height : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
`
export const StyleButton = styled.button`
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
  cursor: ${(props) => (props.$cursor ? props.$cursor : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  height: ${(props) => (props.$height ? props.$height : "")};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : "")};
`
export const ContainerImg = styled.img`
  border-radius: ${(props) => (props.$bRadius ? props.$bRadius : "")};
  cursor: ${(props) => (props.$cursor ? props.cursor : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  padding: ${(props) => (props.$padding ? props.$padding : "")};
  margin: ${(props) => (props.$margin ? props.$margin : "")};
`
