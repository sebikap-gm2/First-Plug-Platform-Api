const TeamMembers = require("../models/TeamMember.models");

type TeamMember = {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: string;
  email: string;
  jobPosition: string;
  city: string;
  zipCode: string;
  address: string;
  appartment: string;
  joiningDate: Date;
  timeSlotForDelivery: string;
  additionalInfo: string;
  teams: string[];
  __v: number;
};

type CreationMember = Omit<Omit<TeamMember, "_id">, "v">;

type DeleteTeamMember = {
  msg: string;
  deletedShipment: TeamMember;
};

class TeamMembersServices {
  static async getAll(): Promise<TeamMember[]> {
    return await TeamMembers.find();
  }

  static async getOne(identifier: TeamMember["_id"]): Promise<TeamMember> {
    return await TeamMembers.findOne({ identifier }).exec();
  }

  static async getById(_id: TeamMember["_id"]): Promise<TeamMember> {
    return await TeamMembers.findById({ _id });
  }

  static async create(data: CreationMember): Promise<TeamMember> {
    return await TeamMembers.create(data);
  }

  static async update(
    id: TeamMember["_id"],
    data: TeamMember
  ): Promise<TeamMember> {
    return await TeamMembers.findByIdAndUpdate(id, data, { new: true });
  }

  static async delete(_id: TeamMember["_id"]): Promise<DeleteTeamMember> {
    return await TeamMembers.findByIdAndDelete(_id);
  }
}

module.exports = TeamMembersServices;
