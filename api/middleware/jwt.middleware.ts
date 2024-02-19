import { Request, Response, NextFunction } from "express";
import { env } from "../config";
import jwt from "jsonwebtoken";

export class JwtMiddleware {
  static async canActivate(req: Request, res: Response, next: NextFunction) {
    const token = JwtMiddleware.extractTokenFromHeaders(req);

    if (!token) {
      res.status(401).json({ message: "Missing authentication token" });
      return;
    }

    try {
      const payload = jwt.verify(token, env.JWTSECRETKEY);

      if (typeof payload === 'string') throw new Error('Unauthorized')

      req["user"] = payload.data.data;
    } catch (error) {
      res.status(401).json({ message: "Missing authentication token" });
      return;
    }

    next();
  }

  static extractTokenFromHeaders(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Bearer" ? token : undefined;
  }
}
