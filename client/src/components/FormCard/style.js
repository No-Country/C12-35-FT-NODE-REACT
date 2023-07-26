import  styled  from "styled-components";

export const CardWrap = styled.div`
  position: relative;
  display: flex;
  width: 250px;
  height: 150px;
  border-radius: var(--radius-light);
  background: linear-gradient(
    to right,
    var(--secondary),
    var(--secondary-dark)
  );
`;
export const ShadowCard = styled.div`
  position: absolute;
  width: 190px;
  height: 150px;
  background-color: #96b4ff30;
  border-radius: 8rem var(--radius-light) var(--radius-light) 0;
  z-index: 9999;
  right: 0;
`;
export const MainFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  width: 100%;
  margin-top: 3rem;
  margin-left: 1.5rem;
  margin-right: 2.2rem;
`;
export const FieldWrapper = styled.div`
  width: ${(props) => (props.$width ? props.$width : "")};
  height: 1.8rem;
  background-color: #96b4ff30;
  border-radius: var(--radius-superlight);
`;
export const FieldDiv = styled.div`
  display: ${(props) => (props.$display ? props.$display : "")};
  gap: ${(props) => (props.$gap ? props.$gap : "")};
  width: ${(props) => (props.$width ? props.$width : "")};
  height: ${(props) => (props.$height ? props.$height : "")};
  background-color: ${(props) => (props.$backGroundColor ? props.$backGroundColor : "")};
  border-radius: ${(props) => (props.$borderRadius ? "var(--radius-superlight)" : "")};
`;
