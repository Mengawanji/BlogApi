import Joi from 'joi';

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const postSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  content: Joi.string().min(10).required(),
  published: Joi.boolean().default(true)
});

export const commentSchema = Joi.object({
  content: Joi.string().min(1).max(1000).required(),
  post_id: Joi.number().integer().positive().required()
});

export const postUpdateSchema = Joi.object({
  title: Joi.string().min(3).max(255),
  content: Joi.string().min(10),
  published: Joi.boolean()
}).min(1); 


export const commentUpdateSchema = Joi.object({
  content: Joi.string().min(1).max(1000).required()
});


