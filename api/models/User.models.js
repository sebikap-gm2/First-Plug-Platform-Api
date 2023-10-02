const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: false,
  },
  contactPhoneNumber: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  apartment: {
    type: String,
    required: false,
  },
});

userSchema.methods.validatePassword = async function (password) {
  try {
    const hashedPassword = await bcrypt.hash(password, this.salt);
    return this.password === hashedPassword;
  } catch (error) {
    console.log(error);
  }
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
