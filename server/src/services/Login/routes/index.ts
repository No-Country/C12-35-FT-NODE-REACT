import { Router } from "express";
import EncrypService from "../../Encryp";
import DBUser from "../../../components/users/data";

const router = Router();

router.post("/", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user: any = await DBUser.findOne({ email });
    if (!user) throw new Error("el email no está registrado");
    const validation = await EncrypService.validate(password, user.password);
    if (!validation) throw new Error("la contraseña es inválida");
    res.status(200).json({ auth: true, user });
  } catch (error: any) {
    res.status(400).json({ auth: false, error: error.message });
  }
});

export default router;
