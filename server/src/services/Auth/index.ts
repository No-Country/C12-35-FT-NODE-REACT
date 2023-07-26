import jwt from "jsonwebtoken";
import { SECRET } from "../../config/envs";
import { ClientError } from "../../utils/errors";

class AuthService {
  async saveToken(id: number) {
    try {
      if (!SECRET) throw new ClientError(401, "Debe configurarse un secret de authentificación");
      const token = jwt.sign({ id }, SECRET, {
        expiresIn: 60 * 60 * 24
      });
      return token;
    } catch (error: any) {
      throw new ClientError(error.statusCode, error.message);
    }
  }

  async validateToken(token: any) {
    // espera recibir el req.headers["access-token"]
    try {
      if (!token) throw new ClientError(404, "No se proporcionó un token");
      const decoded = jwt.verify(token, SECRET);
      return decoded;
    } catch (error: any) {
      throw new ClientError(error.statusCode, error.message);
    }
  }

  async ensureToken(req: any) {
    const bearer: any = req.headers["access-token"];
    if (typeof bearer !== "undefined") {
      return bearer;
    } else {
      throw new ClientError(401, "usuario no autorizado");
    }
  }
}

export default new AuthService();
