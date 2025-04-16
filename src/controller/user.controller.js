import * as UserService from "../services/user.service.js";
export const createUser = async (request, reply) => {
  const { name, email, password } = request.body;
  //vaidation

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };
  const responseData = await UserService.createUser(newUser);
  if (!responseData) {
    reply.status(500).send({ message: "Internal Server Error" });
  }

  reply.status(201).send(newUser);
};
export const getAllUsers = async (request, reply) => {
  const users = await UserService.getAllUsers();
  reply.status(200).send(users);
};
export const getUserById = async (request, reply) => {
  const { id } = request.params;
  const user = await UserService.getUserById(id);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
  } else {
    reply.status(200).send(user);
  }
};
export const updateUser = async (request, reply) => {
  const { id } = request.params;
  const { name, email, password } = request.body;
  const user = await UserService.updateUser(id, { name, email, password });
  if (!user) {
    reply.status(404).send({ message: "User not found" });
  } else {
    reply.status(200).send(user);
  }
};
export const deleteUser = async (request, reply) => {
  const { id } = request.params;
  const user = await UserService.deleteUser(id);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
  } else {
    reply.status(200).send({ message: "User deleted successfully" });
  }
};
export const findUserByEmail = async (request, reply) => {
  const { email } = request.params;
  const user = await UserService.findUserByEmail(email);
  if (!user) {
    reply.status(404).send({ message: "User not found" });
  } else {
    reply.status(200).send(user);
  }
};
export const userLogin = async (request, reply) => {
  const { email, password } = request.body;
  const user = {
    id: Date.now(),
    email,
    password,
  };
  const responseData = await UserService.userLogin(user);
  if (responseData) {
  } else {
    reply.status(401).send({ message: "Invalid credentials" });
  }
};
