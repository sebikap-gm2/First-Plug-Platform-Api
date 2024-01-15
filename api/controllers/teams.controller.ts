import { TeamsServices } from "../services";
import { Request, Response, NextFunction } from "express";

export class TeamsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await TeamsServices.getAll();
      res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
