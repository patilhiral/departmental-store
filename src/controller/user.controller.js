export const createUser = (request, reply) => {
  const { name, email, password } = request.body;
  //vaidation

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };
  //perform busuness logic and store data
  // Return the created user as a response
  reply.status(201).send(newUser);
};
