const TeamMembers = require("../models/TeamMember.models");

class TeamMembersServices {
  static async getAll() {
    return await TeamMembers.find();
  }

  static async getOne(identifier: string) {
    return await TeamMembers.findOne({ identifier }).exec();
  }

  static async getById(_id: string) {
    return await TeamMembers.findById({ _id });
  }

  static async create(data: any) {
    return await TeamMembers.create(data);
  }

  static async update(id: string, data: any) {
    return await TeamMembers.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id: string) {
    return await TeamMembers.findByIdAndDelete(_id);
  }
}

module.exports = TeamMembersServices;
