const User = require("../models/Users.models");

class AuthServices {
  static async getOneUser(email) {
    return await User.findOne({ email: email }).exec();
  }

  static async createUser(data) {
    return await User.create(data);
  }
}

module.exports = AuthServices;
