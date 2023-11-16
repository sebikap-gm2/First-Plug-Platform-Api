import jwt from "jsonwebtoken";
import { env } from "./envCheck";
import { UserPayload } from "api/types";

const SECRET = env.SECRET_PASSWORD;

export function generateToken(payload: UserPayload) {
  return jwt.sign(payload, SECRET);
}

export function validateToken(token: string): UserPayload | null {
  try {
    const decoded = jwt.verify(token, SECRET);
    if (typeof decoded === "object" && decoded !== null) {
      return decoded as UserPayload;
    }
    return null;
  } catch {
    return null;
  }
}
