require("dotenv").config();

const express = require("express");
const connectToDatabase = require("./config/db");
const checkEnvVariables = require("./config/envCheck");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.FIRST_PLUG_PLATFORM_CLIENT_HOST,
    credentials: true,
  })
);

app.use("/api", routes);

// Error Middleware
app.use((req, res) => {
  res.sendStatus(500);
});

(async () => {
  await checkEnvVariables();
  await connectToDatabase();

  app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
})();
