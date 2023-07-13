import { Router } from "express";
import userRouter from "../components/users/routes";
import accountsRouter from "../components/accounts/routes";
import transactionRouter from "../components/transactions/routes";
import transactionHistoryRouter from "../components/transactionHistories/routes";
import paymentGatewayRouter from "../components/paymentGateways/routes";
import cardRouter from "../components/cards/routes";
import authRoutes from "../services/Auth/routes";
import LoginRoutes from "../services/Login/routes";

const router = Router();

router.use("/users", userRouter);
router.use("/accounts", accountsRouter);
router.use("/transactions", transactionRouter);
router.use("/transactionHistory", transactionHistoryRouter);
router.use("/paymentGateway", paymentGatewayRouter);
router.use("/cards", cardRouter);
router.use("/login", LoginRoutes);

// la ruta /auth es únicamente para el testeo y entendimiento de tokens
router.use("/auth", authRoutes);

export default router;
