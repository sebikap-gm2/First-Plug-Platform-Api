import { Request, Response, NextFunction } from "express";
import { MainService } from "../services";
import z from "zod";
import { Types } from "mongoose";

export class TeamsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { _id } = req.user;

      const mainService = new MainService();

      await mainService.initalize(_id);

      const teams = await mainService.runCommand("team", "getAll", {});

      res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
