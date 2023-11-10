import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET = process.env.SECRET_PASSWORD || "";

interface UserPayload extends JwtPayload {
  id: number;
  email: string;
}

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
