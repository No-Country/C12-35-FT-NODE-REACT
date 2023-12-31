import { Router } from "express";
import ctrl from "../controllers";
import globalMiddleware from "../../../middlewares";

const router = Router();

router.get("/", ctrl.getUsers);

router.post("/", ctrl.createUser);

router.put(
  "/me",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  ctrl.updateUser
);

// router.delete(
//   "/:id",
//   globalMiddleware.ensureToken,
//   globalMiddleware.validateToken,
//   globalMiddleware.findAccount,
//   globalMiddleware.checkAccountValidity,
//   ctrl.deleteUser
// );

router.get(
  "/me",
  globalMiddleware.ensureToken,
  globalMiddleware.validateToken,
  globalMiddleware.findAccount,
  globalMiddleware.checkAccountValidity,
  ctrl.getUserById
);

export default router;
