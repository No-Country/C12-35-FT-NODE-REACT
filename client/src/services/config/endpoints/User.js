import { config } from "./Config"

const VITE_DOMAIN = config.domain

const user = {
  register: `${VITE_DOMAIN}/accounts`,
  login: `${VITE_DOMAIN}/login`,
<<<<<<< HEAD
  verify: `${VITE_DOMAIN}/accounts/me`,
  addMoney: `${VITE_DOMAIN}/transactions`
=======
  verify: `${VITE_DOMAIN}/accounts/`
>>>>>>> 61588d3 (trying to fix add money)
}
export default user
