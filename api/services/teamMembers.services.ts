import { TeamMember } from "../models/TeamMembers.models";
import { TeamMemberType, CreationMember } from "api/types/index";

export class TeamMembersServices {
  static async getAll(): Promise<TeamMemberType[]> {
    return await TeamMember.find();
  }

  static async getOne(identifier: TeamMemberType["_id"]) {
    return await TeamMember.findOne({ identifier }).exec();
  }

  static async getById(_id: TeamMemberType["_id"]) {
    return await TeamMember.findById(_id);
  }

  static async create(data: CreationMember) {
    return await TeamMember.create(data);
  }

  static async update(id: TeamMemberType["_id"], data: TeamMemberType) {
    return await TeamMember.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id: TeamMemberType["_id"]) {
    return await TeamMember.findByIdAndDelete(_id);
  }
}
