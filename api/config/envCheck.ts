import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.string().optional(),
  MONGO_URI: z.string().url(),
  JWTSECRETKEY: z.string(),
  JWTREFRESHTOKENKEY: z.string(),
  FIRST_PLUG_PLATFORM_CLIENT_HOST: z.string().url(),
});

const validatedEnv = envSchema.safeParse(process.env);

if (!validatedEnv.success) {
  throw new Error(
    `Environment validation error: ${JSON.stringify(
      validatedEnv.error,
      null,
      2
    )}`
  );
}

export const env = validatedEnv.data;
