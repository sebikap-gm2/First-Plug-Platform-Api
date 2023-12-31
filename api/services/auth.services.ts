import { UserRepository } from "../models";
import { CreationUser, User } from "../types";

export class AuthServices {
  static async validateIfExistEmail(email: User["email"]): Promise<void> {
    const user = await UserRepository.findOne({ email }).exec();

    if (user) {
      return Promise.reject(
        new Error(`This email has already been registered!`)
      );
    }
  }

  static async createUser(data: CreationUser) {
    return await UserRepository.create(data);
  }

  static async getUser(email: User["email"]) {
    const user = await UserRepository.findOne({ email }).exec();

    if (!user) {
      return Promise.reject(new Error(`There is no user with that email`));
    }

    return user;
  }
}
