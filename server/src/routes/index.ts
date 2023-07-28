import { Router } from "express";
import userRouter from "../components/users/routes";
import accountsRouter from "../components/accounts/routes";
import transactionRouter from "../components/transactions/routes";
import transactionHistoryRouter from "../components/transactionHistories/routes";
import paymentGatewayRouter from "../components/paymentGateways/routes";
import cardRouter from "../components/cards/routes";
import authRoutes from "../services/Auth/routes";
import LoginRoutes from "../services/Login/routes";
//import MercadoPago from "../services/MercadoPago/index";
import docRoutes from "./documentation.routes";

const router = Router();

router.use("/users", userRouter);
router.use("/accounts", accountsRouter);
router.use("/transactions", transactionRouter);
router.use("/transaction-history", transactionHistoryRouter);
router.use("/payment-gateway", paymentGatewayRouter);
router.use("/cards", cardRouter);
router.use("/login", LoginRoutes);
router.use("/doc", docRoutes);

// la ruta /auth es únicamente para el testeo y entendimiento de tokens
router.use("/auth", authRoutes);

export default router;
