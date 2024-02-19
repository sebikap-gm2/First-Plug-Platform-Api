import { Request, Response, NextFunction } from "express";
import { env } from "../config";
import jwt from "jsonwebtoken";

export class RefreshMiddleware {
  static async canActivate(req: Request, res: Response, next: NextFunction) {
    const token = RefreshMiddleware.extractTokenFromHeaders(req);

    if (!token) {
      res.status(401).json({ message: "Missing authentication token" });
      return;
    }

    try {
      const payload = jwt.verify(token, env.JWTREFRESHTOKENKEY);

      req["user"] = payload;
    } catch (error) {
      res.status(401).json({ message: "Missing authentication token" });
      return;
    }

    next();
  }

  static extractTokenFromHeaders(request: Request) {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];
    return type === "Refresh" ? token : undefined;
  }
}
