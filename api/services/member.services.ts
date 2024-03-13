import { MemberCollectionValidation, MemberValidation } from "../validations";
import { MemberRepository } from "../models";
import { CreationMember, Member, MemberSchema } from "../types";

export class MembersServices {
  static async getAll() {
    return await MemberRepository.find();
  }

  static async getById(id: MemberSchema["_id"]) {
    const Member = await MemberRepository.findById(id);

    if (!Member) {
      throw new Error("The member was not found");
    }

    return Member;
  }

  static async create(data: CreationMember) {
    MemberValidation.parse(data);
    return await MemberRepository.create(data);
  }

  static async bulkCreate(data: CreationMember) {
    MemberCollectionValidation.parse(data);
    return (await MemberRepository.insertMany(data)).length;
  }

  static async update({ id, data }: { id: string; data: Member }) {
    MemberValidation.parse(data);

    const MemberUpdated = await MemberRepository.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!MemberUpdated) {
      throw new Error("The member was not found");
    }

    return MemberUpdated;
  }

  static async delete(id: MemberSchema["_id"]) {
    const MemberDeleted = await MemberRepository.findByIdAndDelete(id);

    if (!MemberDeleted) {
      throw new Error("The member was not found");
    }

    return MemberDeleted;
  }

  // TODO: The logic of receiving the products and assigning it to a member is missing
}
