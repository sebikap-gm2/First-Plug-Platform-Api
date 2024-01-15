import { Request, Response, NextFunction } from "express";
import { MembersServices } from "../services";

export class MembersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const members = await MembersServices.getAll()

      res.status(200).json(members);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const member = await MembersServices.getById(idMember);

      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newMember = await MembersServices.create(req.body);

      res.status(201).json(newMember);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const updatedMember = await MembersServices.update(idMember, req.body);

      res.status(200).json(updatedMember);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const deletedMember = await MembersServices.delete(idMember);

      res.status(200).json(deletedMember);
    } catch (error) {
      next(error);
    }
  }
}
