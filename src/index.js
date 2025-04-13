import Fastify from "fastify";
import userRoutes from "./routes/user.routes.js";

const fastify = Fastify({
  logger: true,
});
//Register routes
userRoutes(fastify);
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
