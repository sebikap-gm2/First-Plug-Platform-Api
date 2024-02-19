import { LoginUser, UserJWT } from "../types";
import { UserService } from "./user.services";
import { validatePassword } from "../utils";
import { JWTtoken } from "../config";

const EXPIRE_TIME = 20 * 1000;
export class AuthServices {
  static async login(dto: LoginUser) {
    const user = await AuthServices.validateUser(dto);

    const { _id, email, name, image } = user

    const payload: UserJWT = {
      _id: _id.toString(),
      email,
      name,
      image
    }

    return {
      user,
      backendTokens: {
        accessToken: await JWTtoken.generateToken(payload, {
          expiresIn: "1h",
          secret: "JWTSECRETKEY",
        }),

        refreshToken: await JWTtoken.generateToken(payload, {
          expiresIn: "7h",
          secret: "JWTREFRESHTOKENKEY",
        }),
        expireIn: new Date().setTime(new Date().getTime()) * EXPIRE_TIME,
      }
    };
  }

  static async validateUser(dto: LoginUser) {
    const user = await UserService.getByEmail(dto.email);

    if (!user) throw new Error('Unauthorized')

    const authorized = await validatePassword(
      { salt: user.salt, password: user.password },
      dto.password
    )

    if (authorized) {
      return user;
    }

    throw new Error("Unauthorized");
  }

  static async refreshToken(user: UserJWT) {
    const { _id, email, name, image } = user

    const payload: UserJWT = {
      _id: _id?.toString(),
      email,
      name,
      image
    }

    return {
      accessToken: await JWTtoken.generateToken(payload, {
        expiresIn: "1h",
        secret: "JWTSECRETKEY",
      }),
      refreshToken: await JWTtoken.generateToken(payload, {
        expiresIn: "7h",
        secret: "JWTREFRESHTOKENKEY",
      }),
      expireIn: new Date().setTime(new Date().getTime()) * EXPIRE_TIME,
    };
  }
}
