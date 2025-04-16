import * as userController from "../controller/user.controller.js";

const userRoutes = (fastify, options) => {
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
  fastify.get("/users/:userId", userController.getUserById);
  fastify.patch("/users/:userId", userController.updateUser);
  fastify.delete("/users/:userId", userController.deleteUser);
  fastify.post("/users/login", userController.userLogin);
};
export default userRoutes;
