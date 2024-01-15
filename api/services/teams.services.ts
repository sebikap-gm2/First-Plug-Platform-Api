import { MemberRepository } from "../models";

export class TeamsServices {
  static async getAll() {
    const result = await MemberRepository.aggregate([
      {
        $match: {
          teams: { $not: { $size: 0 } },
        },
      },
      {
        $project: {
          _id: 0,
          teams: 1,
        },
      },
      {
        $unwind: "$teams",
      },
      {
        $group: {
          _id: null,
          data: { $addToSet: "$teams" },
        },
      },
    ]).exec();
    return result[0].data;
  }
  // static async createTeam(data: CreationTeam) {
  //   return await TeamRepository.create(data);
  // }
  // static async getOneTeam(id: Team["_id"]) {
  //   const team = await TeamRepository.findById(id);
  //   if (!team) {
  //     throw new Error("Team not found.");
  //   }
  //   return team;
  // }
  // static async updateTeam(id: Team["_id"], data: Team) {
  //   return await TeamRepository.findByIdAndUpdate(id, data, { new: true });
  // }
  // static async deleteTeam(id: Team["_id"]) {
  //   return await TeamRepository.findByIdAndDelete(id);
  // }
}
