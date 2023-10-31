const User = require("../models/Users.models");

type User = {
  fullName: string;
  email: string;
  password: string;
};

class AuthServices {
  static async getUserbyEmail(email: string): Promise<User> {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: User): Promise<User> {
    return await User.create(data);
  }
}

module.exports = AuthServices;
