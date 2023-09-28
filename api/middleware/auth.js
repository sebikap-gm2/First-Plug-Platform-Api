const { validateToken } = require("../config/token");

const validateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ mensaje: "Token de autenticación faltante" });
  }
  const user = validateToken(token.replace("Bearer ", ""));

  if (user) {
    req.user = user;
    return next();
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  validateUser,
};
