import jwt from "jsonwebtoken";
import { SECRET } from "../../config/envs";
import { ClientError } from "../../utils/errors";

class AuthService {
  async saveToken(id: number) {
    try {
      if (!SECRET) throw new ClientError("Debe configurarse un secret de authentificación");
      const token = jwt.sign({ id }, SECRET, {
        expiresIn: 60 * 60 * 24
      });
      return token;
    } catch (error: any) {
      throw new ClientError(error);
    }
  }

  async validateToken(token: any) {
    // espera recibir el req.headers["access-token"]
    try {
      if (!token) throw new ClientError("No se proporcionó un token", 404);
      const decoded = jwt.verify(token, SECRET);
      return decoded;
    } catch (error: any) {
      throw new ClientError(error, 404);
    }
  }

  async ensureToken(req: any) {
    const bearer: any = req.headers["access-token"];
    if (typeof bearer !== "undefined") {
      return bearer;
    } else {
      throw new Error("usuario no autorizado");
    }
  }
}

export default new AuthService();
