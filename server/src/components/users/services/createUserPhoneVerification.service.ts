import db from "../data";
import MobileAuthenticator from "../../../services/2FA/index";

export default async (id: number) => {
  const currentUser = await db.getById(id);
  const userToUpdate = { ...currentUser[0] };
  const verificationObject = await MobileAuthenticator.generate(userToUpdate.phone);
  const verificationObjectJSON = JSON.stringify(verificationObject);
  userToUpdate.verified_phone = verificationObjectJSON;
  console.log(verificationObjectJSON);
  await db.update(id, userToUpdate);
  return userToUpdate;
};
