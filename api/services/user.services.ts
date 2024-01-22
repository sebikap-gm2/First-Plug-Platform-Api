import { User } from "api/types";
import { UserRepository } from "../models";

export class UserService {
  static async getByEmail(email: User['email']) {
    return await UserRepository.findOne({ email }).exec();
  }
}