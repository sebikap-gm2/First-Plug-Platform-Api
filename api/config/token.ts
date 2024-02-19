import jwt from "jsonwebtoken";
import { env } from "./envCheck";
import { UserJWT } from "../types";

interface JwtOptions {
  expiresIn: string;
  secret: "JWTSECRETKEY" | "JWTREFRESHTOKENKEY";
}

const JWT_SECRET_KEYS: Record<"JWTSECRETKEY" | "JWTREFRESHTOKENKEY", string> = {
  JWTSECRETKEY: env.JWTSECRETKEY,
  JWTREFRESHTOKENKEY: env.JWTREFRESHTOKENKEY,
};

export class JWTtoken {
  static async generateToken(
    payload: UserJWT,
    { expiresIn, secret }: JwtOptions
  ) {
    return jwt.sign({ data: payload }, JWT_SECRET_KEYS[secret], { expiresIn });
  }
}
