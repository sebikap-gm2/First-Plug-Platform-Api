import { JWTtoken } from "../config";
import { AuthServices } from "../services";
import { TypedRequestBody, UserPayload } from "../types";
import { NextFunction, Request, Response } from "express";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      await AuthServices.getUserbyEmail(email);

      await AuthServices.createUser(req.body);

      res.status(201).json("User register succeed");
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await AuthServices.getUserbyEmail(email);

      await user.validatePassword(password);

      const payload: UserPayload = {
        _id: user._id,
        email: user.email,
        name: user.name,
      };

      const token = JWTtoken.generateToken(payload);

      res.send({ ...payload, token });
    } catch (error) {
      next(error);
    }
  }

  static async me(req: TypedRequestBody<{ user: UserPayload }>, res: Response) {
    res.send(req.body.user);
  }
}
