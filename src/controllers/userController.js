import User from '../models/User.js';

export const uploadProfilePicture = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const user = await User.updateProfilePicture(req.user.id, req.file.filename);

    res.json({
      message: 'Profile picture uploaded successfully',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        profile_picture: user.profile_picture
      }
    });
  } catch (error) {
    next(error);
  }
};