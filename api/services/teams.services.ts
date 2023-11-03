const Teams = require("../models/Teams.models");

class TeamsServices {
  static async getAllTeams() {
    return await Teams.find().populate("teamMember");
  }

  static async createTeam(data: any) {
    return await Teams.create(data);
  }

  static async getOneTeam(id: string) {
    return await Teams.findById(id);
  }

  static async updateTeam(id: string, data: any) {
    return await Teams.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: string, data: any) {
    return await Teams.findByIdAndDelete(id, data);
  }
}

module.exports = TeamsServices;
