import db from "../data";

export default async (id: number) => {
  const currentUser = await db.getById(id);
  const userToUpdate = { ...currentUser[0] };
  userToUpdate.verified = true;
  const userUpdated = await db.update(id, userToUpdate);
  return userUpdated;
};
