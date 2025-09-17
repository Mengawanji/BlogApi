import express from 'express';

const app = express();

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const validatePost = (req, res, next) => {
  const { title, content } = req.body || {};  
  
  if (!title || title.trim().length < 3) {
    return res.status(400).json({ error: 'Title must be at least 3 characters long' });
  }
  
  if (!content || content.trim().length < 10) {
    return res.status(400).json({ error: 'Content must be at least 10 characters long' });
  }
  
  next();
};

export const validateComment = (req, res, next) => {
  const { content } = req.body || {};
  
  if (!content || content.trim().length < 3) {
    return res.status(400).json({ error: 'Comment must be at least 3 characters long' });
  }
  
  next();
};

export const validateUser = (req, res, next) => {
  const { username, email, password } = req.body || {};
  
  if (!username || username.trim().length < 3) {
    return res.status(400).json({ error: 'Username must be at least 3 characters long' });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }
  
  next();
};
