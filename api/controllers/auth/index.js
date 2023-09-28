const { generateToken } = require("../../config/token");
const User = require("../../models/User.models");
const { sendMail } = require("../../repositories/mailer/mailer");
const { generateCode } = require("../../utils/generateCode");

const register = async (req, res) => {
  try {
    const {
      email,
      password,
      fullname,
      companyName,
      contactPhoneNumber,
      country,
      city,
      state,
      zipcode,
      address,
      apartment,
    } = req.body;

    const userToCheck = await User.findOne({ email: email }).exec();

    if (userToCheck) {
      return res.status(400).send("This mail has been already registered!");
    }

    const newUser = await User.create({
      email,
      password,
      fullname,
      companyName,
      contactPhoneNumber,
      country,
      city,
      state,
      zipcode,
      address,
      apartment,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(401).json("Error at register", error);
    console.log({ error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userToCheck = await User.findOne({ email: email }).exec();

    if (!userToCheck) {
      return res.status(400).send("This mail does not exists!");
    }

    const pwCheck = await userToCheck.validatePassword(password);
    const code = generateCode();
    sendMail(code, "franciscovillanuevaj99@gmail.com");
    if (!pwCheck) {
      return res.status(401).send("Wrong password! Please try again");
    } else {
      const payload = {
        id: userToCheck.id,
        email: userToCheck.email,
        fullname: userToCheck.fullname,
      };

      const token = generateToken(payload);

      res.setHeader("Authorization", `Bearer ${token}`);

      res.send(payload);
    }
  } catch (error) {
    res.status(401).json("Error at register", error);
    console.log({ error });
  }
};

const logout = (req, res) => {
  res.removeHeaders("Authorization");

  res.sendStatus(204);
};

const me = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  register,
  login,
  logout,
  me,
};
