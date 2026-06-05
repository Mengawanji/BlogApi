import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import postRoutes from './routes/posts.js';
import commentRoutes from './routes/comments.js';

import { errorHandler, notFound } from './middleware/errorHandler.js';
import { createTablesAndIndexes } from './config/init_db.js';
import { testConnection } from './config/database.js';
import logger from "./config/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use(notFound);
app.use(errorHandler);

export const initializeApp = async () => {
  try {
    await testConnection();
    await createTablesAndIndexes();
    logger.info("Database initialized successfully");
  } catch (err) {
    logger.fatal({ err }, "Database initialization failed");
    process.exit(1); // No point starting the server with no DB
  }
};

export default app;