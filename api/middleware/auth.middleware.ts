import { Request, Response, NextFunction } from "express";
import { validateToken } from "../config/token";
import { UserPayload } from "../config/token";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserPayload;
  }
}

class AuthMiddleware {
  static validateUser(req: Request, res: Response, next: NextFunction): void {
    const authorizationHeader = req.headers.authorization as string | undefined;

    if (!authorizationHeader) {
      res.status(401).json({ message: "Missing authentication token" });
      return;
    }

    const [bearer, token] = authorizationHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      res.status(401).send("Invalid authorization header");
      return;
    }

    const user = validateToken(token);

    if (!user) {
      res.status(401).json({ message: "Invalid authorization token" });
      return;
    }

    req.user = user;
    next();
  }
}

export default AuthMiddleware;
