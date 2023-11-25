import { Schema } from "mongoose";
import { TeamMembersServices } from ".";
import { TeamRepository } from "../models";
import { CreationTeam, Team } from "../types";

export class TeamsServices {
  static async getAllTeams() {
    return await TeamRepository.find().populate("teamMember");
  }

  static async createTeam(data: CreationTeam) {
    return await TeamRepository.create(data);
  }

  static async getOneTeam(id: Team["_id"]) {
    const team = await TeamRepository.findById(id);

    if (!team) {
      throw new Error("Team not found.");
    }

    return team;
  }

  static async updateTeam(id: Team["_id"], data: Team) {
    return await TeamRepository.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: Team["_id"]) {
    return await TeamRepository.findByIdAndDelete(id);
  }
}
