import UserService from "../user.service.js";
describe("User service", () => {
  let mockUserRepo;
  let userService;
  beforeEach(() => {
    mockUserRepo = {
      createUser: jest.fn(),
      getAllUsers: jest.fn(),
      getUserById: jest.fn(),
      updateUser: jest.fn(),
      deleteUser: jest.fn(),
      userLogin: jest.fn(),
      getUserByEmail: jest.fn(),
    };
    userService = UserService(mockUserRepo);
  });
  describe("createUser", () => {
    test("should create a user", async () => {
      const input = {
        name: "John Doe",
        email: "test@test.com",
        password: "password123",
        role: "user",
      };
      const mockUserResponse = {
        id: 1,
        name: "John Doe",
        email: input.email,
        role: input.role,
      };
      mockUserRepo.createUser.mockResolvedValue(mockUserResponse);
      const response = await userService.createUser(input);
      expect(mockUserRepo.createUser).toHaveBeenCalledWith(input);
      expect(response).toEqual(mockUserResponse);
    });
  });
  describe("getAllUsers", () => {
    test("should return all users", async () => {
      const mockUsers = [
        { id: 1, name: "John Doe", email: "test@test.com", role: "user" },
        { id: 2, name: "Jane Doe", email: "test2@test.com", role: "admin" },
      ];
      mockUserRepo.getAllUsers.mockResolvedValue(mockUsers);
      const response = await userService.getAllUsers();
      expect(mockUserRepo.getAllUsers).toHaveBeenCalled();
      expect(response).toEqual(mockUsers);
    });
  });
  describe("getUserById", () => {
    test("should return user by id", async () => {
      const mockUser = {
        id: 1,
        name: "John Doe",
        email: "test@test.com",
        role: "user",
      };
      mockUserRepo.getUserById.mockResolvedValue(mockUser);
      const response = await userService.getUserById(1);
      expect(mockUserRepo.getUserById).toHaveBeenCalledWith(1);
      expect(response).toEqual(mockUser);
    });
  });
  describe("updateUser", () => {
    test("should update user", async () => {
      const input = {
        name: "John Doe Updated",
        email: "test@test.com",
        password: "newpassword123",
        role: "user",
      };
      const mockUpdatedUser = {
        id: 1,
        ...input,
      };
      mockUserRepo.updateUser.mockResolvedValue(mockUpdatedUser);
      const response = await userService.updateUser(1, input);
      expect(mockUserRepo.updateUser).toHaveBeenCalledWith(1, input);
      expect(response).toEqual(mockUpdatedUser);
    });
  });
  describe("deleteUser", () => {
    test("should delete user by id", async () => {
      const id = 1;
      const mockUser = {
        id: 1,
        name: "John Doe",
        email: "test@test.com",
        role: "user",
      };
      mockUserRepo.deleteUser.mockResolvedValue(mockUser);
      const response = await userService.deleteUser(id);
      expect(mockUserRepo.deleteUser).toHaveBeenCalledWith(id);
      expect(response).toBe(mockUser);
    });
  });
});
