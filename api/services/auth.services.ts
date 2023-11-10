import User from "../models/Users.models";
import { CreationUser } from "api/types/index";

class AuthServices {
  static async getUserbyEmail(email: string) {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: CreationUser) {
    return await User.create(data);
  }
}

export default AuthServices;
