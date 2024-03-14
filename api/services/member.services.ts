import { MemberCollectionValidation, MemberValidation } from "../validations";
import { MemberRepository, ProductRepository } from "../models";
import { CreationMember, Member, MemberSchema } from "../types";
import mongoose from "mongoose";

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

  static async assignProductToMember({
    productId,
    memberId,
  }: {
    productId: string;
    memberId: string;
  }) {
    const member = await MemberRepository.findById(memberId);
    const product = await ProductRepository.findById(productId);

    if (!member || !product) {
      throw new Error("Member or product not found");
    }

    member.products.push(product);

    await member.save();

    await product.remove();
  }

  static async assignManyProductsToMember({
    memberId,
    productsIds,
  }: {
    memberId: string;
    productsIds: string[];
  }) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const member = await MemberRepository.findById(memberId).session(session);

      if (!member) {
        throw new Error("Member not found");
      }

      for (const productId of productsIds) {
        const product = await ProductRepository.findById(productId).session(
          session
        );

        if (!product) {
          throw new Error(`Product with ID ${productId} not found`);
        }

        member.products.push(product);

        await product.remove();
      }

      await member.save();

      await session.commitTransaction();
      session.endSession();
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
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
}
