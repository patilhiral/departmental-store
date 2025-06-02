import userRepository from "../user.repository";
describe("User Repository", () => {
  let query;
  let userRepo;
  beforeEach(() => {
    query = jest.fn();
    userRepo = userRepository(query);
  });
  describe("createUser", () => {
    test("createUser", async () => {
      const input = {
        name: "John Doe",
        email: "test@test.com",
        password: "password123",
        role: "user",
      };

      const mockdbResult = [{ id: 1, ...input }];
      query.mockResolvedValue({ rows: [mockdbResult] });
      const result = await userRepo.createUser(input);
      expect(result).toEqual(mockdbResult);
      expect(query).toHaveBeenCalledWith(
        "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
        [input.name, input.email, input.password, input.role]
      );
    });
    test("createUser  should throw an error if query fails", async () => {
      const input = {
        name: "John Doe",
        email: "test@test.com",
        password: "password123",
        role: "user",
      };
      query.mockRejectedValue(new Error("Database error"));
      await expect(userRepo.createUser(input)).rejects.toThrow(
        "Database error"
      );
    });
  });
  test("getAllUsers", async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "test@test.com", role: "user" },
      { id: 2, name: "Jane Doe", email: "test2@test.com", role: "user" },
    ];
    query.mockResolvedValue(mockUsers);
    const result = await userRepo.getAllUsers();
    expect(result).toEqual(mockUsers);
    expect(query).toHaveBeenCalledWith("Select * from users");
  });
  test("getUserById", async () => {
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "test@test.com",
      role: "user",
    };
    query.mockResolvedValue({ rows: [mockUser] });
    const result = await userRepo.getUserById(1);
    expect(result).toEqual(mockUser);
    expect(query).toHaveBeenCalledWith("select * from users where id= $1", [1]);
  });
  test("updateUser", async () => {
    const input = {
      id: 1,
      name: "John Doe",
      email: "test@test.com",
      role: "user",
    };
    const mockUser = {
      id: 1,
      name: "John Doe",
      email: "test1@test.com",
      role: "user",
    };
    query.mockResolvedValue({ rows: [mockUser] });
    const result = await userRepo.updateUser(input.id, input);
    expect(result).toEqual(mockUser);
    expect(query).toHaveBeenCalledWith(
      "update users set name =$1,email=$2,password=$3,role=$4 where id =$5 RETURNING *",
      [input.name, input.email, input.password, input.role, input.id]
    );
  });
  test("deleteUser", async () => {
    const mockResult = { rowCount: 1 };
    query.mockResolvedValue(mockResult);
    const result = await userRepo.deleteUser(1);
    expect(result).toBe(true);
    expect(query).toHaveBeenCalledWith(
      "delete from users where id = $1 RETURNING *",
      [1]
    );
  });
});
