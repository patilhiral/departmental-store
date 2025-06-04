import { userRegisterSchema } from "../schema/userRegister.schema.js";
import UserRoutes from "../user.routes.js";
describe("User Routes", () => {
  const mockFastify = {
    get: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
  };
  const mockController = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    getUserById: jest.fn(),
    updateUser: jest.fn(),
    deleteUser: jest.fn(),
    userLogin: jest.fn(),
  };
  describe("User Registration", () => {
    test("should call register route", async () => {
      await UserRoutes(mockFastify, { userController: mockController });
      expect(mockFastify.post).toHaveBeenCalledWith(
        "/users",
        userRegisterSchema,
        mockController.createUser
      );
    });
  });
});
