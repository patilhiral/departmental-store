import pool from "./pool.js";

export const query = async (sql, params) => {
    try {
      const res = await pool.query(sql, params);
      return res; // or return res.rows if you only want rows
    } catch (err) {
      console.error("Database query error:", err);
      throw err;
    }
};
