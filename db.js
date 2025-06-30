const { Pool } = require("pg");
require("dotenv").config();

const isRender = process.env.DB_HOST?.includes("render.com");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: isRender ? { rejectUnauthorized: false } : false,
});

pool.connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error al conectar a PostgreSQL:", err));

module.exports = { pool };
