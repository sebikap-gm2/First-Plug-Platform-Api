require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    return await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Failed to connect to database", error);
  }
};

const checkEnvVariables = () => {
  const requiredEnvVariables = [
    "PORT",
    "SECRET_PASSWORD",
    "MONGO_URI",
    "FIRST_PLUG_PLATFORM_CLIENT_HOST",
  ];

  const missingVariables = [];

  requiredEnvVariables.forEach((envVariable) => {
    if (!process.env[envVariable]) {
      missingVariables.push(envVariable);
    }
  });

  if (missingVariables.length > 0) {
    console.error(
      `Las siguientes variables de entorno son necesarias en el archivo .env: ${missingVariables.join(
        ", "
      )}`
    );
    process.exit(1);
  }
};

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

module.exports = { connectToDatabase, checkEnvVariables };
