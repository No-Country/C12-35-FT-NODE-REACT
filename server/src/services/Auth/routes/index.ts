import { Router } from "express";
import AuthService from "../";
import db from "../data/user.db";
import middlewares from "../../../middlewares";

const router = Router();

router.post("/login", async (req: any, res: any) => {
  try {
    const { id } = req.body;
    const token = await AuthService.saveToken(id);
    console.log(token);
    return res.status(200).json({ token });
  } catch (error: any) {
    // throw new ClientError(error.message, 403);
    return res.status(404).send(error.message);
  }
});

router.get("/protected", middlewares.validateToken, async (req: any, res: any) => {
  try {
    console.log(req.token);
    await AuthService.validateToken(req.token);
    return res.status(200).json({ auth: true, token: req.token });
  } catch (error: any) {
    // throw new ClientError(error.message, 403);
    return res.status(404).send(error.message);
  }
});

// req.headers["access-token"]
router.post("/", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user: any = await db.findOne({ email });
    console.log(user);
    if (!user) throw new Error("user dosen't exist");
    const token = await AuthService.saveToken(user.id);
    console.log(token);
    // const authPassword: any = await Encryp.validate(password, user.password);
    const check = await AuthService.validateToken(token);
    res.status(200).json({ auth: true, user, token });
  } catch (error: any) {
    res.status(400).json({ auth: false, error: error });
  }
});

export default router;
