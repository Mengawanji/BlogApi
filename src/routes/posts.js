import express from 'express';
import {
  getAllPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostWithComments,
  searchPosts
} from '../controllers/postController.js';
import { validatePost } from '../middleware/validation.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';
import { apiLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router.get('/', optionalAuth, apiLimiter, getAllPosts);
router.get('/search', optionalAuth, apiLimiter, searchPosts);
router.get('/:id', optionalAuth, apiLimiter, getPost);
router.get('/:id/comments', optionalAuth, apiLimiter, getPostWithComments);
router.post('/', authenticateToken, apiLimiter, validatePost, createPost);
router.put('/:id', authenticateToken, apiLimiter, validatePost, updatePost);
router.delete('/:id', authenticateToken, apiLimiter, deletePost);

export default router;