import { ErrorBox } from "./style";

function Error() {
  return (
    <ErrorBox>
      <HeaderPageCard />
      <Wrapper>
        <TitleWrap>Tarjetas</TitleWrap>
        <CardsSlider />
      </Wrapper>
      <Buttons />
    </ErrorBox>
  );
}

export default Error;
