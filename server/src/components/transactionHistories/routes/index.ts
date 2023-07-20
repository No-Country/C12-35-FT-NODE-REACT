import { Router } from "express";
import ctrl from "../controllers";

const router = Router();

router.get("/", ctrl.getsHistory);

router.get("/:id", ctrl.getHistoryById);

router.post("/", ctrl.createHistory);

router.put("/:id", ctrl.updateHistory);

router.delete("/:id", ctrl.deleteHistory);

export default router;
