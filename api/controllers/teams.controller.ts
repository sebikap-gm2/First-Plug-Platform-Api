import { MainService } from "api/services";
import { Request, Response, NextFunction } from "express";

export class TeamsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req)
      const mainService = new MainService({ dbName: 'firstPlug' })
      const teams = await mainService.team.getAll();
      res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
