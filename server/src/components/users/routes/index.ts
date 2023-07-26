import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../../accounts/middlewares";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", ctrl.createUser);

router.put("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.updateUser);

router.delete("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.deleteUser);

router.get("/:id", ctrl.getUserById);

export default router;
