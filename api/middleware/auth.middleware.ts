import { Request, Response, NextFunction } from "express";
import { JWTtoken } from "../config";
import { UserPayload } from "../types";

export class AuthMiddleware {
  static validateUser(req: Request, res: Response, next: NextFunction): void {
    const authorizationHeader = req.get('authorization')

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

    req.body.user = user
    next()
  }
}
