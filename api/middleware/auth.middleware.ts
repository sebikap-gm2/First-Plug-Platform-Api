import { Request, Response, NextFunction } from "express";
import { JWTtoken } from "api/config/token";
import { UserPayload } from "api/types";

declare module "express-serve-static-core" {
  interface Request {
    user?: UserPayload;
  }
}

export class AuthMiddleware {
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

    const user = JWTtoken.validateToken(token);

    if (!user) {
      res.status(401).json({ message: "Invalid authorization token" });
      return;
    }

    req.user = user;
    next();
  }
}
