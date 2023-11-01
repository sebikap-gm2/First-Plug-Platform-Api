import jwt, { JwtPayload } from "jsonwebtoken";

const SECRET: string = process.env.SECRET_PASSWORD || "";

interface UserPayload extends JwtPayload {
  id: number;
  email: string;
}

function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, SECRET);
}

function validateToken(token: string): UserPayload | null {
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

export { generateToken, validateToken };
