import { Team as TeamType, MongoTeam } from "../types";
import { TeamRepository } from "../models";

export class TeamsServices {
  static async getAllTeams() {
    return await TeamRepository.find().populate("teamMember");
  }

  static async createTeam(data: TeamType) {
    return await TeamRepository.create(data);
  }

  static async getOneTeam(id: MongoTeam["_id"]) {
    return await TeamRepository.findById(id);
  }

  static async updateTeam(id: MongoTeam["_id"], data: TeamType) {
    return await TeamRepository.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: MongoTeam["_id"]) {
    return await TeamRepository.findByIdAndDelete(id);
  }
}
