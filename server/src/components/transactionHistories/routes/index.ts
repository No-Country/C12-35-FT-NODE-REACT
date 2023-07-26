import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getsHistory);

router.get("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.getHistoryById);

router.post("/", ctrl.createHistory);

router.put("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.updateHistory);

router.delete("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.deleteHistory);

export default router;
