import UserController from "../user.controller.js";

describe("User Controller", () => {
  let mockUserService;
  let userController;
  let reply;
  let mockStatus;
  let mockSend;
  beforeEach(() => {
    mockUserService = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
      getUserById: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
      userLogin: jest.fn(),
    };
    userController = UserController(mockUserService);
    mockStatus = jest.fn();
    mockSend = jest.fn();
    reply = {
      status: mockStatus,
      send: mockSend,
    };
    mockStatus.mockReturnValue(reply);
  });
  describe("createUser", () => {
    test("should create a user", async () => {
      const inputUser = {
        name: "John Doe",
        email: "test@test.com",
        password: "password123",
      };

      const createdUser = {
        ...inputUser,
        id: 1,
      };

      const request = { body: inputUser };
      mockUserService.createUser.mockResolvedValue(createdUser);
      await userController.createUser(request, reply);
      expect(mockUserService.createUser).toHaveBeenCalledWith(inputUser);
      expect(mockStatus).toHaveBeenCalledWith(201);
      expect(mockSend).toHaveBeenCalledWith(createdUser);
    });
  });
});
