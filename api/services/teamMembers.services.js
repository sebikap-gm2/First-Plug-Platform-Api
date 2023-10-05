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
}

module.exports = TeamMembersServices;
