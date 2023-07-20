import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../../accounts/middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", ctrl.createUser);

router.put("/:id", ctrl.updateUser);

router.delete("/:id", ctrl.deleteUser);

router.get("/:id", ctrl.getUserById);

export default router;
