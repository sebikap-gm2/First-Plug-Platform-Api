import { Request, Response, NextFunction } from "express";
import { TeamMembersServices } from "../services";

export class TeamMembersController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teamMembers = await TeamMembersServices.getAll();

      res.status(200).json(teamMembers);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const teamMember = await TeamMembersServices.getById(idMember);

      res.status(200).json(teamMember);
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newTeamMember = await TeamMembersServices.create(req.body);

      res.status(201).json(newTeamMember);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const updatedTeamMember = await TeamMembersServices.update(
        idMember,
        req.body
      );

      res.status(200).json(updatedTeamMember);
    } catch (error) {
      next(error);
    }
  }

  static async deleteById(req: Request, res: Response, next: NextFunction) {
    const { idMember } = req.params;
    try {
      const deletedTeamMember = await TeamMembersServices.delete(idMember);

      res.status(200).json(deletedTeamMember);
    } catch (error) {
      next(error);
    }
  }
}
