import { TeamMember } from "../models";
import { TeamMember as TeamMemberType, MongoTeamMember } from "../types";

export class TeamMembersServices {
  static async getAll(): Promise<TeamMemberType[]> {
    return await TeamMember.find();
  }

  static async getOne(identifier: MongoTeamMember["_id"]) {
    return await TeamMember.findOne({ identifier }).exec();
  }

  static async getById(_id: MongoTeamMember["_id"]) {
    return await TeamMember.findById(_id);
  }

  static async create(data: TeamMemberType) {
    return await TeamMember.create(data);
  }

  static async update(id: MongoTeamMember["_id"], data: TeamMemberType) {
    return await TeamMember.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id: MongoTeamMember["_id"]) {
    return await TeamMember.findByIdAndDelete(_id);
  }
}
