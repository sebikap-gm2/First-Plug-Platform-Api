import { connectToDatabase } from "./db";
import { env } from "./envCheck";
import { JWTtoken } from "./token";

// !TODO: when change the tokens functions by classes, you have import that file with here

export { connectToDatabase, env, JWTtoken };
