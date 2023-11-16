import { TeamMemberRepository } from "../models";
import { TeamMember as TeamMemberType, MongoTeamMember } from "../types";

export class TeamMembersServices {
  static async getAll(): Promise<TeamMemberType[]> {
    return await TeamMemberRepository.find();
  }

  static async getOne(identifier: MongoTeamMember["_id"]) {
    return await TeamMemberRepository.findOne({ identifier }).exec();
  }

  static async getById(_id: MongoTeamMember["_id"]) {
    return await TeamMemberRepository.findById(_id);
  }

  static async create(data: TeamMemberType) {
    return await TeamMemberRepository.create(data);
  }

  static async update(id: MongoTeamMember["_id"], data: TeamMemberType) {
    return await TeamMemberRepository.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  static async delete(_id: MongoTeamMember["_id"]) {
    return await TeamMemberRepository.findByIdAndDelete(_id);
  }
}
