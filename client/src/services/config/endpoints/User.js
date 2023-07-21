import { config } from "./Config"

const VITE_DOMAIN = config.domain

const user = {
  register: `${VITE_DOMAIN}/users`,
  login: `${VITE_DOMAIN}/login`,
  verify: `${VITE_DOMAIN}/accounts/`
}
export default user
