// mobile phone verification
import QRCode from "qrcode";
import { authenticator } from "otplib";

class MobileAuthenticator {
  async generate(email: string) {
    const secret = authenticator.generateSecret();
    const url = authenticator.keyuri(email, "My App", secret);
    const qrcode = await QRCode.toDataURL(url);
    return { enabled: false, secret, qrcode };
  }
  async verify(secret: string, token: string) {
    return authenticator.verify({ secret, token });
  }
}
export default new MobileAuthenticator();
