import { Router } from "express";
import userRouter from "../components/User/routes";
import accountsRouter from "../components/Account/routes";
import transactionRouter from "../components/Transaction/routes";
import transactionHistoryRouter from "../components/History/routes";
import paymentGatewayRouter from "../components/PaymentGateway/routes";
import cardRouter from "../components/Card/routes";
import LoginRoutes from "../services/Login/routes";
import paypalRoutes from "../services/PayPal/routes";
import docRoutes from "./documentation.routes";
import mercadopagoRoutes from "../services/MercadoPago/routes";

const router = Router();

router.use("/users", userRouter);
router.use("/accounts", accountsRouter);
router.use("/transactions", transactionRouter);
router.use("/history", transactionHistoryRouter);
router.use("/payment-gateway", paymentGatewayRouter);
router.use("/cards", cardRouter);
router.use("/login", LoginRoutes);
router.use("/paypal", paypalRoutes);
router.use("/doc", docRoutes);
router.use("/mercadopago", mercadopagoRoutes);

export default router;
