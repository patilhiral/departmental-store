import UserController from '../user.controller.js';

describe('User Controller', () => {

    let mockUserService;
    let userController;
    let reply;
    beforeeach(() => {
        mockUserService = {
            createUser: jest.fn(),
            getAllUsers: jest.fn(),
            getUserById: jest.fn(),
            updateUser: jest.fn(),
            deleteUser: jest.fn(),
            userLogin: jest.fn(),
        };
        userController = UserController(mockUserService);
        reply = {
            code: jest.fn().mockReturnThis(),
            send: jest.fn(),
        };
        describe('createUser', () => {
            test('should create a user', async () => {
                const newUser = {
                        name: 'John Doe',
                        email: 'test@test.com',
                        password: 'password123',    
                        role: 'user',
                    }
                    mockUserService.createUser.mockResolvedValue(newUser);
                    const request = {
                        body: newUser,
                    };
                    await userController.createUser(request, reply);
                    expect(mockUserService.createUser).toHaveBeenCalledWith(newUser);
                    expect(reply.code).toHaveBeenCalledWith(201);
                    expect(reply.send).toHaveBeenCalledWith(newUser);
    });


})