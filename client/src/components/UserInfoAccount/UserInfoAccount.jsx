import { CopyAccountInfo } from "@/components"
import { BiLeftArrowAlt } from "react-icons/bi"
import { useSelector } from "react-redux"
import { ContentWrapper } from "./style"

export default function UserInfoAccount() {
  //redux
  const userData = useSelector((state) => state.auth)

  return (
    <ContentWrapper>
      <CopyAccountInfo title='CVU' value={userData.cvu} />
      <CopyAccountInfo title='Alias' value={userData.alias} />
    </ContentWrapper>
  )
}
