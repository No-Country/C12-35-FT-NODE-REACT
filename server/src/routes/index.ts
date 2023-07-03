import { Router } from "express";
import characterRouter from "@/components/characters/routes";

const router = Router();

router.use("/characters", characterRouter);

export default router;
