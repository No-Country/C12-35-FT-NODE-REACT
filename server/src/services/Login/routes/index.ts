import { Router } from "express";
import EncrypService from "../../Encryp";
import DBAccount from "../../../components/accounts/data";
import AuthService from "../../Auth";

const router = Router();

router.post("/", async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user: any = await DBAccount.findOne({ email });
    if (!user) throw new Error("el email no está registrado");
    const validation = await EncrypService.validate(password, user.password);
    if (!validation) throw new Error("la contraseña es inválida");
    const token = await AuthService.saveToken(user.id);
    res.status(200).json({ auth: true, user, token });
  } catch (error: any) {
    res.status(400).json({ auth: false, error: error.message });
  }
});

export default router;
