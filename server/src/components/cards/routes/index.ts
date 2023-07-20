import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getCards);

router.get("/:id", ctrl.getCardById);

router.post("/", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.createCard);

router.put("/:id", ctrl.updateCard);

router.delete("/:id", ctrl.deleteCard);

export default router;
