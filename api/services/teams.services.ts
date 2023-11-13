import { Team as TeamType, MongoTeam } from "api/types/index";
import { Team } from "../models/Teams.models";

export class TeamsServices {
  static async getAllTeams() {
    return await Team.find().populate("teamMember");
  }

  static async createTeam(data: TeamType) {
    return await Team.create(data);
  }

  static async getOneTeam(id: MongoTeam["_id"]) {
    return await Team.findById(id);
  }

  static async updateTeam(id: MongoTeam["_id"], data: TeamType) {
    return await Team.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: MongoTeam["_id"]) {
    return await Team.findByIdAndDelete(id);
  }
}
