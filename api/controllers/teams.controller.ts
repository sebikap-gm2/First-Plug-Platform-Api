import { Request, Response, NextFunction } from "express";
import { MembersServices, TeamsServices } from "../services";
import { createMockTeam } from "../mocks/datamocks";

export class TeamsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const mockTeams = Array.from({ length: 10 }).map((_, i) =>
        createMockTeam(i)
      );
      res.status(200).json(mockTeams);
    } catch (error) {
      next(error);
    }
  }

  static async newTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const team = await TeamsServices.createTeam(req.body);

      res.status(201).json(team);
    } catch (error) {
      next(error);
    }
  }

  static async addMemberToTeam(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { teamId, memberId } = req.body;

    try {
      // Todo - validation with zod
      if (!teamId || !memberId) {
        return res.send("Missing data");
      }

      const team = await TeamsServices.getOneTeam(teamId);

      const Member = await MembersServices.getById(memberId);

      // Todo - new service!!!
      if (team.members.includes(memberId)) {
        return res.status(401).send("User is already in this team");
      }

      team.members.push(memberId);
      Member.teams.push(team.name);

      await team.save();
      await Member.save();

      res.status(200).json({
        message: "Team member add succesfully.",
        team,
        Member,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteMemberFromTeam(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { teamId, memberId } = req.params;

    try {
      // Todo - validation zod
      if (!teamId || !memberId) {
        return res.send("Missing data");
      }

      const team = await TeamsServices.getOneTeam(teamId);

      // Todo - validation in service
      const Member = await MembersServices.getById(memberId);

      // Todo - new service!!!
      if (!team.members.map((id) => id.toString()).includes(memberId)) {
        return res.status(401).send("Member is not in this team");
      }

      // Todo - new service!!!
      team.members = team.members.filter(
        (member) => member.toString() !== memberId
      );

      Member.teams = Member.teams.filter((member) => member !== team.name);
      await team.save();
      await Member.save();

      res.status(200).json({
        message: "Team member has been deleted succesfully.",
        team,
        Member,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updateTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const { idTeam } = req.params;

      const updatedTeam = await TeamsServices.updateTeam(idTeam, req.body);

      res.status(200).json(updatedTeam);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const { idTeam } = req.params;
      const deletedTeam = await TeamsServices.deleteTeam(idTeam);
      res.status(200).json(deletedTeam);
    } catch (error) {
      next(error);
    }
  }
}
