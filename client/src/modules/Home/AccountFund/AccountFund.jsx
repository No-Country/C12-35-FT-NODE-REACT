import { DetailFund, ModalDetailAccount, UserInfoAccount } from "@/components"
import { useState } from "react"
import { BiLeftArrowAlt } from "react-icons/bi"
import { useSelector } from "react-redux"
import { Header, StyledLink, Title, Wrap, Wrapper } from "./style"

function AccountFund() {
  //redux
  const userData = useSelector((state) => state.auth)

  //states
  const [infoChecked, setInfoChecked] = useState(false)

  //constants
  const SIZE = "1.2rem"

  //handlers
  const handleInfoChecked = () => {
    setInfoChecked(!infoChecked)
  }
  return (
    <Wrapper>
      {!infoChecked ? (
        <Wrap>
          <Header>
            <Title>Dinero disponible</Title>
            <ModalDetailAccount onClick={handleInfoChecked} />
          </Header>
          <DetailFund funds={userData?.balance} />
        </Wrap>
      ) : (
        <>
          <StyledLink onClick={handleInfoChecked}>
            <BiLeftArrowAlt size={SIZE} />
          </StyledLink>
          <UserInfoAccount />
        </>
      )}
    </Wrapper>
  )
}

export default AccountFund
