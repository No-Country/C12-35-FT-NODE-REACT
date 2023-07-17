import { Header, Title, Wrap, Wrapper } from "./style"
import { DetailFund, ModalDetailAccount } from "@/components"

function AccountFund() {
  return (
    <Wrapper>
      <Wrap>
        <Header>
          <Title>Dinero disponible</Title>
          <ModalDetailAccount />
        </Header>
        <DetailFund funds={1000.23} />
      </Wrap>
    </Wrapper>
  )
}

export default AccountFund
