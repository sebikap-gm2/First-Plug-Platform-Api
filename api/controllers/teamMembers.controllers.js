const TeamMembersServices = require("../services/teamMembers.services");

class TeamMembersControllers {
  static getAll(req, res) {}

  static getById(req, res) {}

  static async create(req, res, next) {
    try {
      const TeamMember = await TeamMembersServices.getByEmail(req.body.email);

      if (TeamMember) {
        return res.status(400).send("This mail has been already");
      }

      const newTeamMember = await TeamMembersServices.create(req.body);

      res.status(201).json(newTeamMember);
    } catch (error) {
      next();
    }
  }

  static updateById(req, res) {}

  static deleteById(req, res) {}
}

module.exports = TeamMembersControllers;
