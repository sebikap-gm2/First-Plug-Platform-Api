import Teams from "../models/Teams.models";
import { TeamType, CreationTeam } from "api/types/index";

class TeamsServices {
  static async getAllTeams() {
    return await Teams.find().populate("teamMember");
  }

  static async createTeam(data: CreationTeam) {
    return await Teams.create(data);
  }

  static async getOneTeam(id: TeamType["_id"]) {
    return await Teams.findById(id);
  }

  static async updateTeam(id: TeamType["_id"], data: TeamType) {
    return await Teams.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: TeamType["_id"]) {
    return await Teams.findByIdAndDelete(id);
  }
}

export default TeamsServices;
