import pool from "./pool.js";

export const query = async (sql, params) => {
  pool
    .query(sql, params)
    .then((res) => res.rows)
    .catch((err) => {
      console.error("Database query error:", err);
      throw err;
    });
};
