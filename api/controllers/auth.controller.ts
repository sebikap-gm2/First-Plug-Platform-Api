import { validatePassword } from "../utils";
import { AuthServices } from "../services";
import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../models";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const user = await AuthServices.validateIfExistEmail(email)

      if (user) {
        throw new Error(`This email has already been registered!`)
      }

      await AuthServices.createUser(req.body);

      res.status(201).json("User register succeed");
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await AuthServices.getUser(email);

      await validatePassword(user, password);

      const response = {
        name: user.name,
        email: user.email,
        image: user.image,
      };

      res.send(response);
    } catch (error) {
      next(error);
    }
  }

  // It is very similar to register but is used to register third-party platforms. Receive different data from the front
  // !TODO Has different zod validations than normal registration
  static async registerPlatform(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email } = req.body;
      const user = await UserRepository.findOne({ email }).exec();

      if (!user) {
        await AuthServices.createUser(req.body);
      }

      res.status(201).json("User register succeed");
    } catch (error) {
      next(error);
    }
  }
}
