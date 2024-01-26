import { LoginUser, UserJWT } from "../types";
import { UserService } from "./user.services";
import { validatePassword } from "../utils";
import { JWTtoken } from "../config";

const EXPIRE_TIME = 20 * 1000;
export class AuthServices {
  static async login(dto: LoginUser) {
    const user = await AuthServices.validateUser(dto);

    const payload: UserJWT = {
      _id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
    };

    return {
      user: payload,
      backendTokens: {
        accessToken: await JWTtoken.generateToken(payload, {
          expiresIn: "60s",
          secret: "JWTSECRETKEY",
        }),

        refreshToken: await JWTtoken.generateToken(payload, {
          expiresIn: "7h",
          secret: "JWTREFRESHTOKENKEY",
        }),
      },
      expireIn: new Date().setTime(new Date().getTime()) * EXPIRE_TIME,
    };
  }

  static async validateUser(dto: LoginUser) {
    const user = await UserService.getByEmail(dto.email);

    if (
      user &&
      (await validatePassword(
        { salt: user.salt, password: user.password },
        dto.password
      ))
    ) {
      return user;
    }

    throw new Error("Unauthorized");
  }

  static async refreshToken(user: any) {
    const payload = {
      name: user.name,
      email: user.email,
      image: user.image,
      tenantName: user.tenantName,
    };

    return {
      accessToken: await JWTtoken.generateToken(payload, {
        expiresIn: "20s",
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
