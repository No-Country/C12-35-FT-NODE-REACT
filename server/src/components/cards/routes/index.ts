import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getCards);

router.post("/", ctrl.createCard);

export default router;
