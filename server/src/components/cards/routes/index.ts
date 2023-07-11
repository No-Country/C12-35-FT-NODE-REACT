import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getCards);

router.get("/:id", ctrl.getCardById);

router.post("/", ctrl.createCard);

router.put("/:id", ctrl.updateCard);

router.delete("/:id", ctrl.deleteCard);

export default router;
