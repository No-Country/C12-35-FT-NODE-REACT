import db from "../data";

export default async (id: number) => {
  const currentUser = await db.getById(id);
  const userToUpdate = { ...currentUser };
  userToUpdate.verified = true;
  const userUpdated = await db.update(id, userToUpdate);
  return userUpdated;
};
