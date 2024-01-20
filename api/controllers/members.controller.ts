import { MainService } from "api/services";
import { Request, Response, NextFunction } from "express";

export class MembersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const members = await mainService.member.getAll()

      res.status(200).json(members);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const mainService = new MainService({ dbName: 'test' })
      const member = await mainService.member.getById(idMember);

      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const mainService = new MainService({ dbName: 'test' })
      const newMember = await mainService.member.create(req.body);

      res.status(201).json(newMember);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const mainService = new MainService({ dbName: 'test' })
      const updatedMember = await mainService.member.update(idMember, req.body);

      res.status(200).json(updatedMember);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const mainService = new MainService({ dbName: 'test' })
      const deletedMember = await mainService.member.delete(idMember);

      res.status(200).json(deletedMember);
    } catch (error) {
      next(error);
    }
  }
}
