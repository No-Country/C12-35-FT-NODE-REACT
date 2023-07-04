import { Router } from "express";
import userRouter from "../components/users/routes";

const router = Router();

router.use("/users", userRouter);

export default router;
