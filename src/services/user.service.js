import * as UserRespository from "../repositories/user.repository.js";
export const createUser = async (userData) => {
  const user = await UserRespository.createUser(userData);
  return user;
};

export const getAllUsers = async () => {
  const users = await UserRespository.getAllUsers();
  return users;
};
export const getUserById = async (id) => {
  const user = await UserRespository.getUserById(id);
  return user;
};
export const updateUser = async (id, userData) => {
  const user = await UserRespository.updateUser(id, userData);
  return user;
};
export const deleteUser = async (id) => {
  const user = await UserRespository.deleteUser(id);
  return user;
};

export const userLogin = async (email) => {
  const user = await UserRespository.findUserByEmail(email);
  return user;
};
