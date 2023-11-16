import { TeamRepository } from "../models";
import { Team } from "../types";

export class TeamsServices {
  static async getAllTeams() {
    return await TeamRepository.find().populate("teamMember");
  }

  static async createTeam(data: Team) {
    return await TeamRepository.create(data);
  }

  static async getOneTeam(id: Team["_id"]) {
    return await TeamRepository.findById(id);
  }

  static async updateTeam(id: Team["_id"], data: Team) {
    return await TeamRepository.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: Team["_id"]) {
    return await TeamRepository.findByIdAndDelete(id);
  }
}
