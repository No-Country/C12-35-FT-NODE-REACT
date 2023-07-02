import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../middlewares";

const router = Router();

router.get("/", ctrl.getCharcaters);

router.post("/", middlewares.validationCharacter, ctrl.createCharacter);

export default router;
