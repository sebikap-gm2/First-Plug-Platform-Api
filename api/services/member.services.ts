import { memberCollectionValidation } from "../validations";
import { MemberRepository } from "../models";
import { CreationMember, Member, MemberSchema } from "../types";

export class MembersServices {
  static async getAll() {
    return await MemberRepository.find();
  }

  static async getOne(identifier: MemberSchema["_id"]) {
    const Member = await MemberRepository.findOne({
      identifier,
    }).exec();

    if (!Member) {
      throw new Error("Team member not found");
    }

    return Member;
  }

  static async getById(_id: MemberSchema["_id"]) {
    const Member = await MemberRepository.findById(_id);

    if (!Member) {
      throw new Error("Team Member not found.");
    }

    return Member;
  }

  static async create(data: CreationMember) {
    return await MemberRepository.create(data);
  }

  static async bulkCreate(data: CreationMember) {
    memberCollectionValidation.parse(data);
    return (await MemberRepository.insertMany(data)).length;
  }

  static async update({ id, data }: { id: string; data: Member }) {
    const MemberUpdated = await MemberRepository.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (MemberUpdated) {
      throw new Error("the team member was not found");
    }

    return MemberUpdated;
  }

  static async delete(_id: MemberSchema["_id"]) {
    const MemberDeleted = await MemberRepository.findByIdAndDelete(_id);

    if (!MemberDeleted) {
      throw new Error("the team member was not found");
    }

    return MemberDeleted;
  }
}
