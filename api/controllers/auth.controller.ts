import { generateToken } from "../config/token";
import { AuthServices } from "../services";
import { Request, Response } from "express";

class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const { email } = req.body;

      const user = await AuthServices.getUserbyEmail(email);

      if (user) {
        res.status(400).send("This mail has been already registered!");
        return;
      }

      await AuthServices.createUser(req.body);

      res.status(201).json("User register succed");
    } catch (error) {
      res.status(401).json("Error at register");
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await AuthServices.getUserbyEmail(email);

      if (!user) {
        res.status(404).send("This mail does not exists!");
        return;
      }

      const isValid = await user.validatePassword(password);

      if (!isValid) {
        res.status(401).send("Wrong password! Please try again");
        return;
      }

      const payload = {
        id: user._id,
        email: user.email,
        name: user.name,
      };

      const token = generateToken(payload);

      const response = { ...payload, token };

      res.send(response);
    } catch (error) {
      res.status(500).json("Error at login");
    }
  }

  static async me(req: Request, res: Response) {
    res.send(req.user);
  }
}

export { AuthController };
