const Teams = require("../models/Teams.models");

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
  v: number;
};

type Team = {
  _id: string;
  name: string;
  teamMember: TeamMember[];
  v: number;
};

type createTeam = Omit<Omit<Team, "_id">, "__v">;

type DeleteTeam = {
  msg: string;
  deletedShipment: Team;
};

class TeamsServices {
  static async getAllTeams(): Promise<Team[]> {
    return await Teams.find().populate("teamMember");
  }

  static async createTeam(data: createTeam): Promise<Team> {
    return await Teams.create(data);
  }

  static async getOneTeam(id: Team["_id"]): Promise<Team> {
    return await Teams.findById(id);
  }

  static async updateTeam(id: Team["_id"], data: Team): Promise<Team> {
    return await Teams.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteTeam(id: Team["_id"], data: Team): Promise<DeleteTeam> {
    return await Teams.findByIdAndDelete(id, data);
  }
}

module.exports = TeamsServices;
