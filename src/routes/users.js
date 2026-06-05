import express from 'express';
import multer from 'multer';
import { uploadProfilePicture } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';
import { fileFilter, storage } from '../config/upload.js';

const upload = multer({ storage, fileFilter });
const router = express.Router();

router.post('/profile_upload', authenticateToken, upload.single('profile'), uploadProfilePicture);

export default router;