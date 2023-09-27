// Configuracion DB
require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Base de datos conectada correctamente ${process.env.MONGO_URI}`
    );
  } catch (error) {
    console.error("Error en la conexión a la base de datos:", error);
  }
};

module.exports = connectToDatabase;
