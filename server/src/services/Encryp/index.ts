import bcrypt from "bcryptjs";

class EncrypService {
  async encrypt(data: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(data, salt);
  }

  async validate(password: string, hashedData: string) {
    return bcrypt.compare(password, hashedData);
  }
}

export default new EncrypService();
