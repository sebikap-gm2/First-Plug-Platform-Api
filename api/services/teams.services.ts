import { TeamType, CreationTeam } from "api/types/index";
import { Team } from "../models/Teams.models";

export class TeamsServices {
  static async getAllTeams() {
    return await Team.find().populate("teamMember");
  }

  static async createTeam(data: CreationTeam) {
    return await Team.create(data);
  }

  static async getOneTeam(id: TeamType["_id"]) {
    return await Team.findById(id);
  }

  static async updateTeam(id: TeamType["_id"], data: TeamType) {
    return await Team.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: TeamType["_id"]) {
    return await Team.findByIdAndDelete(id);
  }
}
