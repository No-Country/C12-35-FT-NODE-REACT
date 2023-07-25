import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../../accounts/middlewares";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

<<<<<<< HEAD
// router.post("/", middlewares.validateDuplicate, middlewares.encryptPassword, ctrl.createUser);
=======
router.post("/", ctrl.createUser);
>>>>>>> b822c13 (.)

router.put("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.updateUser);

router.delete("/:id", globalMiddleware.ensureToken, globalMiddleware.validateToken, ctrl.deleteUser);

router.get("/:id", ctrl.getUserById);

export default router;
