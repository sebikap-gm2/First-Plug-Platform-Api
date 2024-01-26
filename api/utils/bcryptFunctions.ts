import bcrypt from "bcrypt";
import { validateUser } from "../types";

export async function validatePassword(user: validateUser, password: string) {
  const hashedPassword = await bcrypt.hash(password, user.salt);

  if (user.password !== hashedPassword) {
    throw new Error(`The credentials are not valid, please try again.`);
  }

  return user.password === hashedPassword;
}

export async function generateHash(
  password: string,
  salt: string
): Promise<string> {
  return bcrypt.hash(password, salt);
}
