import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", ctrl.createUser);

export default router;
