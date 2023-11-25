import { TeamMemberRepository } from "../models";
import { CreationTeamMember, TeamMember } from "../types";

export class TeamMembersServices {
  static async getAll() {
    return await TeamMemberRepository.find();
  }

  static async getOne(identifier: TeamMember["_id"]) {
    const teamMember = await TeamMemberRepository.findOne({
      identifier,
    }).exec();

    if (!teamMember) {
      throw new Error("Team member not found");
    }

    return teamMember;
  }

  static async getById(_id: TeamMember["_id"]) {
    const teamMember = await TeamMemberRepository.findById(_id);

    if (!teamMember) {
      throw new Error("Team Member not found.");
    }

    return teamMember;
  }

  static async create(data: CreationTeamMember) {
    return await TeamMemberRepository.create(data);
  }

  static async update(id: TeamMember["_id"], data: TeamMember) {
    const teamMemberUpdated = await TeamMemberRepository.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );

    if (teamMemberUpdated) {
      throw new Error("the team member was not found");
    }

    return teamMemberUpdated;
  }

  static async delete(_id: TeamMember["_id"]) {
    const teamMemberDeleted = await TeamMemberRepository.findByIdAndDelete(_id);

    if (!teamMemberDeleted) {
      throw new Error("the team member was not found");
    }

    return teamMemberDeleted;
  }
}
