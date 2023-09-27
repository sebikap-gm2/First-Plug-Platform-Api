const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  salt: String,
  companyName: String,
  contactPhoneNumber: String,
  billingInformation: {
    country: String,
    city: String,
    state: String,
    zipcode: String,
    address: String,
    apartment: String,
  },
});

userSchema.methods.validatePassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, this.salt);
  return this.password === hashedPassword;
};

userSchema.methods.generateHash = async (password, salt) => {
  return bcrypt.hash(password, salt);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);

    this.salt = salt;
    this.password = await this.generateHash(this.password, salt);

    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
