import express from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { validateUser } from '../middleware/validation.js';
import { authLimiter } from '../middleware/rateLimiter.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', authLimiter, validateUser, register);
router.post('/login', authLimiter, login);
router.get('/me', authenticateToken, getMe);

export default router;