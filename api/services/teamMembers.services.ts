import TeamMembers from "../models/TeamMember.models";
import { TeamMemberType } from "api/types/index";

type CreationMember = Omit<Omit<TeamMemberType, "_id">, "v">;

class TeamMembersServices {
  static async getAll(): Promise<TeamMemberType[]> {
    return await TeamMembers.find();
  }

  static async getOne(identifier: TeamMemberType["_id"]) {
    return await TeamMembers.findOne({ identifier }).exec();
  }

  static async getById(_id: TeamMemberType["_id"]) {
    return await TeamMembers.findById(_id);
  }

  static async create(data: CreationMember) {
    return await TeamMembers.create(data);
  }

  static async update(id: TeamMemberType["_id"], data: TeamMemberType) {
    return await TeamMembers.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id: TeamMemberType["_id"]) {
    return await TeamMembers.findByIdAndDelete(_id);
  }
}

export default TeamMembersServices;
