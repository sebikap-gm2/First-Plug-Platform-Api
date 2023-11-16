import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import { connectToDatabase } from "./config";
import { env } from "./config";
import { router } from "./routes";

dotenv.config();
const app: Application = express();
const PORT: string = env.PORT || "3000";

app.use(express.json());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: env.FIRST_PLUG_PLATFORM_CLIENT_HOST,
    credentials: true,
  })
);

app.use("/api", router);

// Error Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send(`Error: ${err.message}`);
});

(async () => {
  await connectToDatabase();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
})();
