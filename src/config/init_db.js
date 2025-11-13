import { pool } from "./database.js";

export const createTablesAndIndexes = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) UNIQUE NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
       );
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          content TEXT NOT NULL,
          author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    await client.query(`
      CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      content TEXT NOT NULL,
      post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
      author_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);


    // Create indexes
    await client.query(`CREATE INDEX IF NOT EXISTS idx_posts_author_id ON posts(author_id)`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id)`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_comments_author_id ON comments(author_id)`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at)`);


    // Commit transaction
    await client.query('COMMIT');
    console.log('Tables and indexes created successfully.');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating tables and indexes:', error.message);
  } finally {
    client.release();
  }
};