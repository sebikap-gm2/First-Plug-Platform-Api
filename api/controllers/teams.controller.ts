import { Request, Response, NextFunction } from "express";
import TeamMembersServices from "../services/teamMembers.services";
import TeamsServices from "../services/teams.services";

class TeamsController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await TeamsServices.getAllTeams();
      res.json(teams);
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

  static async addTeamMemberToTeam(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { teamId, memberId } = req.body;

    try {
      if (!teamId || !memberId) {
        return res.send("Missing data");
      }
      const team = await TeamsServices.getOneTeam(teamId);

      if (!team) {
        return res.status(404).json({ message: "Team not found." });
      }

      const teamMember = await TeamMembersServices.getById(memberId);

      if (!teamMember) {
        return res.status(404).json({ message: "Team Member not found." });
      }
      if (team.teamMember.includes(memberId)) {
        return res.status(401).send("User is already in this team");
      }
      team.teamMember.push(memberId);
      teamMember.teams.push(team.name);

      await team.save();
      await teamMember.save();

      res.status(200).json({
        message: "Team member add succesfully.",
        team,
        teamMember,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTeamMemberFromTeam(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { teamId, memberId } = req.params;

    try {
      if (!teamId || !memberId) {
        return res.send("Missing data");
      }
      const team = await TeamsServices.getOneTeam(teamId);

      if (!team) {
        return res.status(404).json({ message: "Team not found." });
      }

      const teamMember = await TeamMembersServices.getById(memberId);

      if (!teamMember) {
        return res.status(404).json({ message: "Team Member not found." });
      }
      if (!team.teamMember.map((id) => id.toString()).includes(memberId)) {
        return res.status(401).send("Member is not in this team");
      }
      team.teamMember = team.teamMember.filter(
        (member) => member.toString() !== memberId
      );

      teamMember.teams = teamMember.teams.filter(
        (member) => member !== team.name
      );
      await team.save();
      await teamMember.save();

      res.status(200).json({
        message: "Team member has been deleted succesfully.",
        team,
        teamMember,
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

export { TeamsController };
