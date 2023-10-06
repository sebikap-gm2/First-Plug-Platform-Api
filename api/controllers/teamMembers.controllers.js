const TeamMembersServices = require("../services/teamMembers.services");

class TeamMembersControllers {
  static async getAll(req, res, next) {
    try {
      const teamMembers = await TeamMembersServices.getAll();

      res.status(200).json(teamMembers);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    const { idMember } = req.params;
    try {
      const teamMember = await TeamMembersServices.getById(idMember);

      if (!teamMember) {
        res.status(404).json({ message: "the team member was not found" });
      }

      res.status(200).json(teamMember);
    } catch (error) {
      next(error);
    }
  }

  static async create(req, res, next) {
    try {
      const teamMember = await TeamMembersServices.getOne(req.body.email);

      if (teamMember) {
        return res.status(400).send("This mail has been already");
      }

      const newTeamMember = await TeamMembersServices.create(req.body);

      res.status(201).json(newTeamMember);
    } catch (error) {
      next(error);
    }
  }

  static async updateById(req, res, next) {
    const { idMember } = req.params;
    try {
      const updatedTeamMember = await TeamMembersServices.update(
        idMember,
        req.body
      );

      if (!updatedTeamMember) {
        res.status(404).json({ message: "the team member was not found" });
      }

      res.status(200).json(updatedTeamMember);
    } catch (error) {
      next();
    }
  }

  static async deleteById(req, res, next) {
    const { idMember } = req.params;
    try {
      const deletedTeamMember = await TeamMembersServices.delete(idMember);

      if (!deletedTeamMember) {
        res.status(404).json({ message: "the team member was not found" });
      }

      res.status(200).json(deletedTeamMember);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TeamMembersControllers;
