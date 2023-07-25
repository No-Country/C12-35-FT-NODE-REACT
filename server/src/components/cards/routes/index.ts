import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.getCards);

router.get("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.getCardById);

router.post("/", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.createCard);

router.put("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.updateCard);

router.delete("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.deleteCard);

export default router;
