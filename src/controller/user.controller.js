const userController = (UserService) => ({
  createUser: async (request, reply) => {
    const { name, email, password } = request.body;
    //vaidation
    console.log("Creating user with data:", { name, email, password });

    const newUser = {
      name,
      email,
      password,
    };
    const responseData = await UserService.createUser(newUser);
    if (!responseData) {
      reply.status(500).send({ message: "Internal Server Error" });
    }

    reply.status(201).send(responseData);
  },
  getAllUsers: async (request, reply) => {
    const users = await UserService.getAllUsers();
    reply.status(200).send(users);
  },
  getUserById: async (request, reply) => {
    const { id } = request.params;
    const user = await UserService.getUserById(id);
    if (!user) {
      reply.status(404).send({ message: "User not found" });
    } else {
      reply.status(200).send(user);
    }
  },
  updateUser: async (request, reply) => {
    const { id } = request.params;
    const { name, email, password } = request.body;
    console.log(id, name, email, password);
    const user = await UserService.updateUser(id, { name, email, password });
    if (!user) {
      reply.status(404).send({ message: "User not found" });
    } else {
      reply.status(200).send(user);
    }
  },
  deleteUser: async (request, reply) => {
    const { id } = request.params;
    const user = await UserService.deleteUser(id);
    if (!user) {
      reply.status(404).send({ message: "User not found" });
    } else {
      reply.status(200).send({ message: "User deleted successfully" });
    }
  },
  findUserByEmail: async (request, reply) => {
    const { email } = request.params;
    const user = await UserService.userLogin(email);
    if (!user) {
      reply.status(404).send({ message: "User not found" });
    } else {
      reply.status(200).send(user);
    }
  },
  userLogin: async (request, reply) => {
    const { email, password } = request.body;
    const user = {
      email,
      password,
    };
    const responseData = await UserService.userLogin(user);
    if (responseData) {
      reply.status(200).send(responseData);
    } else {
      reply.status(401).send({ message: "Invalid credentials" });
    }
  },
});
export default userController;
