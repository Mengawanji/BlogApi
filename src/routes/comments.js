import express from 'express';
import {
  getPostComments,
  createComment,
  deleteComment
} from '../controllers/commentController.js';
import { validateComment } from '../middleware/validation.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';
import { apiLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/posts/:id/comments', optionalAuth, apiLimiter, getPostComments);
router.post('/posts/:id/comments', authenticateToken, apiLimiter, validateComment, createComment);
router.delete('/:id', authenticateToken, apiLimiter, deleteComment);

export default router;