const Teams = require("../models/Teams.models");

class TeamsServices {
  static async getAllTeams() {
    return await Teams.find().populate("teamMember");
  }

  static async createTeam(data) {
    return await Teams.create(data);
  }

  static async getOneTeam(id) {
    return await Teams.findById(id);
  }

  static async updateTeam(id, data) {
    return await Teams.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id, data) {
    return await Teams.findByIdAndDelete(id, data);
  }
}

module.exports = TeamsServices;
