const userService = (UserRespository) => ({
  createUser: async (userData) => {
    const user = await UserRespository.createUser(userData);
    return user;
  },
  getAllUsers: async () => {
    const users = await UserRespository.getAllUsers();
    return users;
  },
  getUserById: async (id) => {
    const user = await UserRespository.getUserById(id);
    return user;
  },
  updateUser: async (id, userData) => {
    const user = await UserRespository.updateUser(id, userData);
    return user;
  },
  deleteUser: async (id) => {
    const user = await UserRespository.deleteUser(id);
    return user;
  },
  userLogin: async (email) => {
    const user = await UserRespository.userLogin(email);
    return user;
  },
});
export default userService;
