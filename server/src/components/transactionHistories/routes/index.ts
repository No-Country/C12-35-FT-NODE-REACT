import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getsHistory);

router.get("/mine", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.getHistoryById);

router.post("/", ctrl.createHistory);

router.put("/mine", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.updateHistory);

router.delete("/mine", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.deleteHistory);

export default router;
