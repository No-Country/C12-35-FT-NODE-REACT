import { config } from "./Config"

const VITE_DOMAIN = config.domain

const user = {
  register: `${VITE_DOMAIN}/accounts`,
  login: `${VITE_DOMAIN}/login`,
  verify: `${VITE_DOMAIN}/accounts/`,
  addMoney: `${VITE_DOMAIN}/transactions`
}
export default user
