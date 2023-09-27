require("dotenv").config();

const express = require("express");
const mongoose = require("./api/config/db");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.FIRST_PLUG_PLATFORM_CLIENT_HOST,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("ok");
});

mongoose.connection.once("open", () => {
  console.log("Base de datos conectada correctamente");
});

mongoose.connection.on("error", (error) => {
  console.error("Error en la conexión a la base de datos:", error);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
