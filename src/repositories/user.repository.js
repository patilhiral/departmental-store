const userRepository = (query) => ({
  createUser: async ({ name, email, password, role = "user" }) => {
    try {
      const res = await query(
        "INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, email, password, role]
      );
      console.log("Query result:", res);

      if (!res || !res.rows || res.rows.length === 0) {
        throw new Error("Query did not return any rows");
      }

      return res.rows[0];
    } catch (err) {
      console.error("Error creating user:", err.message);
      throw err;
    }
  },
  getUserByEmail: async (email) => {
    const res = await query("SELECT * from users where email = $1", [email]);
    return res.rows[0];
  },
  userLogin: async ({ email, password }) => {
    const res = await query(
      "select * from users where email= $1 and password=$2",
      [email, password]
    );
    return res.rows[0];
  },
  getUserById: async (id) => {
    const res = await query("select * from users where id= $1", [id]);
    return res.rows[0];
  },
  getAllUsers: async () => {
    const res = await query("Select * from users");
    return res;
  },
  updateUser: async (id, { name, email, password, role = "user" }) => {
    const res = await query(
      "update users set name =$1,email=$2,password=$3,role=$4 where id =$5 RETURNING *",
      [name, email, password, role, id]
    );
    return res.rows[0];
  },
  deleteUser: async (id) => {
    const res = await query("delete from users where id = $1 RETURNING *", [
      id,
    ]);
    return res.rowCount > 0;
  },
});

export default userRepository;
