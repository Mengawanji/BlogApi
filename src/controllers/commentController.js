import Comment from '../models/Comment.js';
import Post from '../models/Post.js';

export const getPostComments = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    
    const comments = await Comment.findByPostId(req.params.id, limit, offset);
    res.json(comments);
  } catch (error) {
    next(error);
  }
};

export const createComment = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const comment = await Comment.create({
      content: req.body.content,
      post_id: req.params.id,
      author_id: req.user.id
    });

    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    const isOwner = await Comment.checkOwnership(req.params.id, req.user.id);
    if (!isOwner) {
      return res.status(403).json({ error: 'Not authorized to delete this comment' });
    }

    await Comment.delete(req.params.id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    next(error);
  }
};