import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", middlewares.validateDuplicate, middlewares.encryptPassword, ctrl.createUser);

router.get("/verify/:id", ctrl.verifyUser);

export default router;
