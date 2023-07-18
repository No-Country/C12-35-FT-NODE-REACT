import { Router } from "express";
import ctrl from "../controllers";
import middlewares from "../../accounts/middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

// router.post("/", middlewares.validateDuplicate, middlewares.encryptPassword, ctrl.createUser);

router.put("/:id", middlewares.encryptPassword, ctrl.updateUser);

router.delete("/:id", ctrl.deleteUser);

router.get("/:id", ctrl.getUserById);

router.get("/verify/:id", ctrl.verifyUser);

router.get("/createPhoneVerification/:id", ctrl.createUserPhoneVerification);

router.post("/verifyPhone/:id", ctrl.verifyUserPhone);

export default router;
