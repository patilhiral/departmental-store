import Fastify from "fastify";
import userRoutes from "./routes/user.routes.js";
import { query } from "./db/dbOperation.js";
import createUserRepository from "./repositories/user.repository.js";
import createUserService from "./services/user.service.js";
import CreateUserController from "./controller/user.controller.js";

const fastify = Fastify({
  logger: true,
});

const userRepository = createUserRepository(query);
const userService = createUserService(userRepository);
const userController = CreateUserController(userService);

fastify.register(userRoutes, {
  userController,
});
const start = async () => {
  try {
    await fastify.listen({ port: 9000 });
    console.log("Server is running on http://localhost:9000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
