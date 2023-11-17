import { TeamMemberRepository } from "../models";
import { TeamMember } from "../types";

export class TeamMembersServices {
  static async getAll() {
    return await TeamMemberRepository.find();
  }

  static async getOne(identifier: TeamMember["_id"]) {
    return await TeamMemberRepository.findOne({ identifier }).exec();
  }

  static async getById(_id: TeamMember["_id"]) {
    return await TeamMemberRepository.findById(_id);
  }

  static async create(data: TeamMember) {
    return await TeamMemberRepository.create(data);
  }

  static async update(id: TeamMember["_id"], data: TeamMember) {
    return await TeamMemberRepository.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  static async delete(_id: TeamMember["_id"]) {
    return await TeamMemberRepository.findByIdAndDelete(_id);
  }
}
