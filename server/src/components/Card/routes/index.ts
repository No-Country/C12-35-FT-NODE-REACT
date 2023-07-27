import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.getCards);

router.get(
  "/:id",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  ctrl.getCardById
);

router.post(
  "/",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  ctrl.createCard
);

router.put(
  "/:id",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  ctrl.updateCard
);

router.delete(
  "/:id",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  ctrl.deleteCard
);

export default router;
