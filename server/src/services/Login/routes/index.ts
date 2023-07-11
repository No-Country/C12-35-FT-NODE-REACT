import { Router } from "express";
import EncrypService from "../../Encryp";
import DBUser from "../../../components/users/data";
import { IUser } from "../../../components/users/models/IUser";

const router = Router();

router.post("/login", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user: any = await DBUser.findOne({ email });
    const validation = await EncrypService.validate(password, user.password);
    res.status(200).json({ auth: true, user, validation });
  } catch (error: any) {
    res.status(400).json({ auth: false, error: error });
  }
});

router.post("/signin", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user: any = await DBUser.findOne({ email });
    const validation = await EncrypService.validate(password, user.password);
    res.status(200).json({ auth: true, user, validation });
  } catch (error: any) {
    res.status(400).json({ auth: false, error: error });
  }
});

export default router;
