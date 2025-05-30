const userRepository = (query) => ({
  createUser: async (name, email, password, role) => {
    const res = await query(
      "INSERT into users (name,email,passoword,role) VALUE ($1,$2,$3,$4) RETURN *",
      [name, email, password, role]
    );
    return res.rows[0];
  },
  getUserByEmail: async (email) => {
    const res = await query("SELECT * from users where email = $1", [email]);
    return res[0];
  },
  getUserById: async (id) => {
    const res = await query("select * from users where id= $1", [id]);
    return res[0];
  },
  getAllUsers: async () => {
    const res = await query("Select * from users");
    return res;
  },
  updateUser: async (id, { name, email, password, role }) => {
    const res = await query(
      "update users set name =$1,email=$2,password=$3,role=$4 where id =$5 RETURNING *",
      [name, email, password, role, id]
    );
    return res[0];
  },
  deleteUser: async (id) => {
    const res = await query("delete from users where id = $1 RETURNING *", [
      id,
    ]);
    return res, rowCount > 0;
  },
});

export const createUser = async () => {
  return {
    user: {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    },
  };
};

export const getAllUsers = async () => {
  return [{ id: 1, name: "John Doe", email: "johndoe@example.com" }];
};

export const getUserById = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
export const updateUser = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
export const deleteUser = async () => {
  return true;
};
export const findUserByEmail = async () => {
  return { id: 1, name: "John Doe", email: "johndoe@example.com" };
};
