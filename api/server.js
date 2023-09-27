require("dotenv").config();

const express = require("express");
const connectToDatabase = require("./config/db");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const UserSchema = require("./models/User.models");

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

(async () => {
  await connectToDatabase();

  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
})();
