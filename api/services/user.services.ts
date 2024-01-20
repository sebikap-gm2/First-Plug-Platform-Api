import { User } from "api/types";
import { UserRepository } from "api/models";

export class UserService {
  static async getByEmail(email: User['email']) {
    return await UserRepository.findOne({ email }).exec();
  }
}