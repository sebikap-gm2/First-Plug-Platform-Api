const express = require("express");
const mongoose = require("./api/config/db");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
