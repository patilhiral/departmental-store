import { userRegisterSchema } from "./schema/userRegister.schema";
const userRoutes = (fastify, options) => {
  const { userController } = options;
  fastify.post("/users", userRegisterSchema, userController.createUser);
  fastify.get("/users", userController.getAllUsers);
  fastify.get("/users/:id", userController.getUserById);
  fastify.patch("/users/:id", userController.updateUser);
  fastify.delete("/users/:id", userController.deleteUser);
  fastify.post("/users/login", userController.userLogin);
};
export default userRoutes;
