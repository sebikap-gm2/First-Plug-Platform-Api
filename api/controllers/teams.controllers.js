const TeamsServices = require("../services/teams.services");

class TeamsController {
  static async getAll(req, res) {
    try {
      const teams = await TeamsServices.getAllTeams();

      res.json(teams);
    } catch (error) {
      res.status(400).json({ "Error obtaining equipment": error });
      console.error(error);
    }
  }

  static async newTeam(req, res) {
    try {
      const team = await TeamsServices.createTeam(req.body);

      res.status(201).json(team);
    } catch (error) {
      res.status(401).json({ "Error creating team": error });
      console.error(error);
    }
  }

  static async updateTeam(req, res) {
    try {
      const { idTeam } = req.params;

      const updatedTeam = await TeamsServices.updateTeam(idTeam, req.body);

      res.status(200).json(updatedTeam);
    } catch (error) {
      res.status(400).json({ "Error updating team": error });
      console.error(error);
    }
  }

  static async deleteTeam(req, res) {
    try {
      const { idTeam } = req.params;
      const deletedTeam = await TeamsServices.deleteTeam(idTeam);
      res.status(200).json(deletedTeam);
    } catch (error) {
      res.status(400).json({ "Error deleting team": error });
      console.error(error);
    }
  }
}

module.exports = TeamsController;
