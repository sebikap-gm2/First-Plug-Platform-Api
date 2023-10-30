const User = require("../models/Users.models");

class AuthServices {
  static async getUserbyEmail(email: string) {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data: object) {
    return await User.create(data);
  }
}

module.exports = AuthServices;
