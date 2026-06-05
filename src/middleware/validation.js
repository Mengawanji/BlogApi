const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const createValidationError = (field, message) => ({
  error: {
    code: "VALIDATION_ERROR",
    status: 400,
    field,
    message,
  },
});

export const validateUser = (req, res, next) => {
  const { username, email, password } = req.body || {};

  if (!username || username.trim().length < 3) {
    return res
      .status(400)
      .json(createValidationError("username", "Username must be at least 3 characters long"));
  }

  if (!email || !EMAIL_REGEX.test(email.trim())) {
    return res
      .status(400)
      .json(createValidationError("email", "Valid email is required"));
  }

  if (!password || password.length < 8) {
    return res
      .status(400)
      .json(createValidationError("password", "Password must be at least 8 characters long"));
  }

  next();
};

export const validatePost = (req, res, next) => {
  const { title, content } = req.body || {};

  if (!title || title.trim().length < 3) {
    return res
      .status(400)
      .json(createValidationError("title", "Title must be at least 3 characters long"));
  }

  if (!content || content.trim().length < 10) {
    return res
      .status(400)
      .json(createValidationError("content", "Content must be at least 10 characters long"));
  }

  next();
};

export const validateComment = (req, res, next) => {
  const { content } = req.body || {};

  if (!content || content.trim().length < 3) {
    return res
      .status(400)
      .json(createValidationError("content", "Comment must be at least 3 characters long"));
  }

  next();
};