const TeamMembers = require("../models/TeamMember.models");

class TeamMembersServices {
  static async getByEmail(email) {
    return await TeamMembers.findOne({ email: email }).exec();
  }

  static async create(data) {
    return await TeamMembers.create(data);
  }
}

module.exports = TeamMembersServices;
