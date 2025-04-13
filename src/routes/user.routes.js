import * as userController from "../controller/user.controller.js";

const userRoutes = (fastify, options) => {
  fastify.post("/user", userController.createUser);
};
export default userRoutes;
