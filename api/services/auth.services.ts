import { UserRepository } from "../models";
import { CreationUser, User } from "../types";

export class AuthServices {
  static async getUserbyEmail(email: User["email"]) {
    const user = await UserRepository.findOne({ email: email }).exec();

    if (!user) {
      throw new Error(`This mail has been already registered!`);
    }

    return user;
  }

  static async createUser(data: CreationUser) {
    return await UserRepository.create(data);
  }
}
