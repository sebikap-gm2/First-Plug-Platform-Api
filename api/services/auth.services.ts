import { UserRepository } from "../models";
import { User as UserType } from "../types";

export class AuthServices {
  static async getUserbyEmail(email: string) {
    return await UserRepository.findOne({ email: email }).exec();
  }

  static async createUser(data: UserType) {
    return await UserRepository.create(data);
  }
}
