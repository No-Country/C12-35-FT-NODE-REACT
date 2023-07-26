import { useSelector } from "react-redux"
import { Header, Title, Wrap, Wrapper } from "./style"
import { DetailFund, ModalDetailAccount } from "@/components"

function AccountFund() {
  const userData = useSelector((state) => state.auth)
  console.log(userData?.balance)
  return (
    <Wrapper>
      <Wrap>
        <Header>
          <Title>Dinero disponible</Title>
          <ModalDetailAccount />
        </Header>
        <DetailFund funds={userData?.balance} />
      </Wrap>
    </Wrapper>
  )
}

export default AccountFund
