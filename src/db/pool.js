import pg from "pg";
import dotenv from "dotenv";

const { Pool } = pg;
dotenv.config();
console.log({
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5454,
  database: process.env.DB_NAME,
});
const dbConfig = Object.freeze({
  user: process.env.DB_USER,
  password: String(process.env.DB_PASSWORD),
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5454,
  database: process.env.DB_NAME,
});
const pool = new Pool(dbConfig);
export default pool;
