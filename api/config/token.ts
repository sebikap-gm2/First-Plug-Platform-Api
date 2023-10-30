const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET_PASSWORD;

function generateToken(payload: string) {
  const token = jwt.sign({ payload }, SECRET);
  return token;
}

function validateToken(token: string) {
  return jwt.verify(token, SECRET);
}

module.exports = { generateToken, validateToken };
