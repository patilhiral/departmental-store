export const createUser = async () => {
  return {
    user: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
  };
};

export const getAllUsers = async () => {
  return [{ id: 1, name: "John Doe", email: "johndoe@example.com" }];
};

export const getUserById = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
export const updateUser = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
export const deleteUser = async () => {
  return true;
};
export const findUserByEmail = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
