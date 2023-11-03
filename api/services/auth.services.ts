import User, { IUser } from "../models/Users.models";

type User = {
  _id: number;
  fullname: string;
  email: string;
  password: string;
};

class AuthServices {
  static async getUserbyEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: User): Promise<User> {
    return await User.create(data);
  }
}

export default AuthServices;
