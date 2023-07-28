import visaLogo from "@/assets/images/logos/visa.png"
import mastercardLogo from "@/assets/images/logos/mastercard.png"
import americanExpressLogo from "@/assets/images/logos/american_express.png"

const useLogos = () => {
  const LOGOS = {
    MASTERCARD: mastercardLogo,
    VISA: visaLogo,
    "AMERICAN EXPRESS": americanExpressLogo
  }

  const setLogo = (bankProvider) => {
    return <img src={LOGOS[bankProvider]} />
  }

  return { setLogo }
}

export default useLogos
