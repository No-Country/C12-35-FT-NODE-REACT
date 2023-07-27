import { Router } from "express";
import userRouter from "../components/User/routes";
import accountsRouter from "../components/Account/routes";
import transactionRouter from "../components/Transaction/routes";
import transactionHistoryRouter from "../components/History/routes";
import paymentGatewayRouter from "../components/PaymentGateway/routes";
import cardRouter from "../components/Card/routes";
import LoginRoutes from "../services/Login/routes";
<<<<<<< HEAD
<<<<<<< HEAD
//import MercadoPago from "../services/MercadoPago/index";
import docRoutes from "./documentation.routes";
=======
import MercadoPago from "../services/MercadoPago/index";
import paypalRoutes from "../services/PayPal/routes";
>>>>>>> bedfc8d (config de paypal, y restructuracion de la creacion de usuario)
=======
import paypalRoutes from "../services/PayPal/routes";
import docRoutes from "./documentation.routes";
import mercadopagoRoutes from "../services/MercadoPago/routes";
>>>>>>> c7d51e7 (feat: mercadopago integration)

const router = Router();

router.use("/users", userRouter);
router.use("/accounts", accountsRouter);
router.use("/transactions", transactionRouter);
router.use("/history", transactionHistoryRouter);
router.use("/payment-gateway", paymentGatewayRouter);
router.use("/cards", cardRouter);
router.use("/login", LoginRoutes);
<<<<<<< HEAD
router.use("/doc", docRoutes);
<<<<<<< HEAD
=======
router.use("/paypal", paypalRoutes);

// router.post("/checkout", async (req, res) => {
//   const algo = await MercadoPago.createPreference(req.body.amount, req.body.email);
//   //console.log(algo);
//   res.send(algo);
// });
// router.get("/algo", async (req, res) => {
//   const otro = await MercadoPago.getPreference("1298391875-267b65e2-c940-4a16-8414-b359a8654d5f");
//   console.log(otro);
//   res.send(otro);
// });
// router.get("/success", (req, res) => {res.send("Success");});
// router.get("/pending", (req, res) => {res.send("Pending");});
// router.post("/webhook", async (req, res) => {
//   console.log(req.body);
//   await MercadoPago.webhook(req.body);
//   res.send("ok");
// });
>>>>>>> bedfc8d (config de paypal, y restructuracion de la creacion de usuario)
=======
router.use("/mercadopago", mercadopagoRoutes);
>>>>>>> c7d51e7 (feat: mercadopago integration)

export default router;
