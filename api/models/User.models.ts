import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserEntity } from "../types";
import { generateHash } from "../utils";
import { BaseSchema } from "./base.models";

const UsersSchema = new mongoose.Schema<UserEntity>({
  tenantId: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  },
  image: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    default: null,
  },
  salt: {
    type: String,
    default: null,
  },
}, {timestamps: true});


UsersSchema.pre<UserEntity>("save", async function (next) {
  if (!this.isModified("password") || !this.password) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);

    this.salt = salt;
    this.password = await generateHash(this.password, salt);

    next();
  } catch (error) {
    return next(error as Error);
  }
});

export const UserRepository = mongoose.model<UserEntity>("Users", UsersSchema);
