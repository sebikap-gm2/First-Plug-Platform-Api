import User from "../models/Users.models";
import { UserType } from "api/types/index";

type CreationUser = Omit<Omit<UserType, "_id">, "_v">;

class AuthServices {
  static async getUserbyEmail(email: string) {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: CreationUser) {
    return await User.create(data);
  }
}

export default AuthServices;
