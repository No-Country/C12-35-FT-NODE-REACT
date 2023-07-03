import { register } from "@@/endpoints/User"

export const registerUser = (values, setState) => {
  axios
    .get(register)
    .then((res) => {
      setState(res.data)
    })
    .catch((err) => {
      setError(true)
    })
}
