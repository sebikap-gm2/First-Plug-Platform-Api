// Configuracion DB
const mongoose = require("mongoose");

const dbURI = "mongodb://localhost:27017/firstplug";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database is connected to ${dbURI}`);
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

module.exports = mongoose;
