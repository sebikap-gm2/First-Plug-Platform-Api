import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { env } from "./config";
import { router } from "./routes";

import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

dotenv.config();
const app: Application = express();
const PORT = env.PORT || "3000";

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
  if (err instanceof ZodError) {
    const errorMessages = err.errors.map((issue: any) => ({
      message: `${issue.path.join(".")} is ${issue.message}`,
    }));
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: errorMessages });
  }
  res.status(500).send(`Error: ${err.message}`);
});

(async () => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
})();
