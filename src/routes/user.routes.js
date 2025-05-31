const userRoutes = (fastify, options) => {
  const { userController } = options;
  fastify.post(
    "/users",
    {
      schema: {
        body: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            password: { type: "string", minLength: 6 },
          },
        },
      },
    },
    userController.createUser
  );
  fastify.get("/users", userController.getAllUsers);
  fastify.get("/users/:id", userController.getUserById);
  fastify.patch("/users/:id", userController.updateUser);
  fastify.delete("/users/:id", userController.deleteUser);
  fastify.post("/users/login", userController.userLogin);
};
export default userRoutes;
