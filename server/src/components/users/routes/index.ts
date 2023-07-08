import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", middlewares.encryptPassword, ctrl.createUser);

export default router;
