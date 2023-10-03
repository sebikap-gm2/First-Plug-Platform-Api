const { validateToken } = require("../config/token");

const validateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing authentication token" });
  }

  const user = validateToken(token.replace("Bearer ", ""));

  if (!user) {
    return res.status(401).json({ message: "Missing user" });
  }

  req.user = user;
  next();
};

module.exports = {
  validateUser,
};
