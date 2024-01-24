import { NextFunction, Request, Response } from "express";
import { validatePassword } from "../utils";
import { MainService } from "../services";

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: "tenants" });
      const { email } = req.body;
      const user = await mainService.auth.validateIfExistEmail(email);

      if (user) {
        throw new Error(`This email has already been registered!`);
      }

      await mainService.auth.createUser(req.body);

      res.status(201).json("User register succeed");
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req);
      const mainService = new MainService({ dbName: "tenants" });

      const { email, password } = req.body;
      const user = await mainService.auth.getUser(email);

      console.log(user);

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
  static async registerAuthenticationProvider(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { email } = req.body;
      const mainService = new MainService({ dbName: "tenants" });
      const user = await mainService.user.getByEmail(email);

      if (!user) {
        await mainService.auth.createUser(req.body);
      }

      res.status(201).json("User register succeed");
    } catch (error) {
      next(error);
    }
  }
}
