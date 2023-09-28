function generateCode() {
  return Math.trunc(Math.random() * (9999 - 1000) + 1000);
}

module.exports = { generateCode };
