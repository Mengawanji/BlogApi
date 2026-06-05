import dotenv from 'dotenv';
import { Pool } from 'pg';
import logger from './logger.js';
dotenv.config();

const  pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT), 
  ssl: { rejectUnauthorized: false}
})

export default pool;

// Test connection
const testConnection = async () => {
  try {
    const client = await pool.connect();
    logger.info("Database connected successfully");
    client.release();
  } catch (error) {
    logger.fatal({ error }, "Database connection failed");
    process.exit(1);
  }
};

export { pool, testConnection };