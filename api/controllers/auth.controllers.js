const { generateToken } = require("../config/token");
const AuthServices = require("../services/auth.services");

class AuthControllers {
  static async register(req, res) {
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

      const userToCheck = await AuthServices.getOneUser(email);

      if (userToCheck) {
        return res.status(400).send("This mail has been already registered!");
      }

      const newUser = await AuthServices.createUser({
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
      res.status(401).json({ "Error at register": error });
      console.log(error);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const userToCheck = await AuthServices.getOneUser(email);

      if (!userToCheck) {
        return res.status(400).send("This mail does not exists!");
      }

      const pwCheck = await userToCheck.validatePassword(password);

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
  }

  static logout(req, res) {
    res.removeHeaders("Authorization");
    res.sendStatus(204);
  }

  static me(req, res) {
    res.send(req.user);
  }
}

module.exports = AuthControllers;
