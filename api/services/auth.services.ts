import { UserRepository } from "../models";
import { CreationUser, User } from "../types";

export class AuthServices {
  static async getUserbyEmail(email: User["email"]) {
    return await UserRepository.findOne({ email: email }).exec();
  }

  static async createUser(data: CreationUser) {
    return await UserRepository.create(data);
  }
}
