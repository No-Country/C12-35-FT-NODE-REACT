import db from "../../users/data";
import MobileAuthenticator from "../../../services/2FA/index";

export default async (id: number, secret: string, token: string) => {
  const currentUser = await db.getById(id);
  const userToUpdate = { ...currentUser };
  const userVerificationBoolean = await MobileAuthenticator.verify(secret, token);
  if (!userVerificationBoolean) {
    throw new Error("Invalid token");
  }
  userToUpdate.verified_phone = userVerificationBoolean.toString();
  await db.update(id, userToUpdate);
  return userToUpdate;
};
