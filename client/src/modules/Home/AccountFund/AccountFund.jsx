import { useSelector } from "react-redux"
import { Header, Title, Wrap, Wrapper } from "./style"
import { DetailFund, ModalDetailAccount } from "@/components"

function AccountFund() {
  const userData = useSelector((state) => state.auth)

  return (
    <Wrapper>
      <Wrap>
        <Header>
          <Title>Dinero disponible</Title>
          <ModalDetailAccount />
        </Header>
        <DetailFund funds={userData.balance?.balance} />
      </Wrap>
    </Wrapper>
  )
}

export default AccountFund
