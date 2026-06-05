import pool from '../config/database.js';

class Comment {
  static async findByPostId(postId, limit = 10, offset = 0) {
    const result = await pool.query(
      `SELECT c.*, u.username as author_name 
       FROM comments c 
       JOIN users u ON c.author_id = u.id 
       WHERE c.post_id = $1 
       ORDER BY c.created_at ASC 
       LIMIT $2 OFFSET $3`,
      [postId, limit, offset]
    );
    return result.rows;
  }

  static async create(commentData) {
    const { content, post_id, author_id } = commentData;
    const result = await pool.query(
      'INSERT INTO comments (content, post_id, author_id) VALUES ($1, $2, $3) RETURNING *',
      [content, post_id, author_id]
    );
    return result.rows[0];
  }

  static async findById(id) {
    const result = await pool.query(
      `SELECT c.*, u.username as author_name 
       FROM comments c 
       JOIN users u ON c.author_id = u.id 
       WHERE c.id = $1`,
      [id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await pool.query('DELETE FROM comments WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  }

  static async checkOwnership(commentId, userId) {
    const result = await pool.query(
      'SELECT author_id FROM comments WHERE id = $1',
      [commentId]
    );
    return result.rows[0]?.author_id === userId;
  }
}

export default Comment;