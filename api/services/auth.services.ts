import { User } from "../models/Users.models";
import { User as UserType } from "../types/User";

export class AuthServices {
  static async getUserbyEmail(email: string) {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: UserType) {
    return await User.create(data);
  }
}
