const TeamMembers = require("../models/TeamMember.models");

class TeamMembersServices {
  static async getAll() {
    return await TeamMembers.find().exec();
  }

  static async getOne(identifier) {
    return await TeamMembers.findOne({ identifier }).exec();
  }

  static async getById(_id) {
    return await TeamMembers.findById({ _id });
  }

  static async create(data) {
    return await TeamMembers.create(data);
  }

  static async update(id, data) {
    return await TeamMembers.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id) {
    return await TeamMembers.findByIdAndDelete(_id);
  }
}

module.exports = TeamMembersServices;
