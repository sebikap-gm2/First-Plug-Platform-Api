const TeamsServices = require("../services/teams.services");

class TeamsController {
  static async getAll(req, res, next) {
    try {
      const teams = await TeamsServices.getAllTeams();

      res.json(teams);
    } catch (error) {
      next(error);
    }
  }

  static async newTeam(req, res, next) {
    try {
      const team = await TeamsServices.createTeam(req.body);

      res.status(201).json(team);
    } catch (error) {
      next(error);
    }
  }

  static async updateTeam(req, res, next) {
    try {
      const { idTeam } = req.params;

      const updatedTeam = await TeamsServices.updateTeam(idTeam, req.body);

      res.status(200).json(updatedTeam);
    } catch (error) {
      next(error);
    }
  }

  static async deleteTeam(req, res, next) {
    try {
      const { idTeam } = req.params;
      const deletedTeam = await TeamsServices.deleteTeam(idTeam);
      res.status(200).json(deletedTeam);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TeamsController;
