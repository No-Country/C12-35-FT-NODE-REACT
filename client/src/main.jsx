import "@/assets/css/format.css"
import "@/assets/fonts/fonts.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import "react-toastify/dist/ReactToastify.css"
import App from "./App.jsx"
import { store } from "./store/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
)
