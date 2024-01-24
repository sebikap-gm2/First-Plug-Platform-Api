import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { UserEntity } from "../types";
import { generateHash } from "../utils";

const UsersSchema = new mongoose.Schema<UserEntity>(
  {
    tenantName: {
      type: Schema.Types.String,
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
  },
  { timestamps: true }
);

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

// !TODO We need this model to be assigned to our tenant db and not to all db
export const UserRepository = mongoose.model<UserEntity>("Users", UsersSchema);
