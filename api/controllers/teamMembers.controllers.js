const TeamMembersServices = require("../services/teamMembers.services");

class TeamMembersControllers {
  static async getAll(req, res, next) {
    try {
      const teamMembers = await TeamMembersServices.getAll();

      res.status(200).json(teamMembers);
    } catch (error) {
      next();
    }
  }

  static async getById(req, res, next) {
    const { idMember } = req.params;
    try {
      const teamMember = await TeamMembersServices.getById(idMember);
      res.status(200).json(teamMember);
    } catch (error) {
      console.log(error);
      next();
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
      next();
    }
  }

  static updateById(req, res) {}

  static deleteById(req, res) {}
}

module.exports = TeamMembersControllers;
