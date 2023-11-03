import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  fullname: string;
  email: string;
  password: string;
  salt: string;
  companyName?: string;
  contactPhoneNumber?: string;
  country?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  address?: string;
  apartment?: string;
  teams: Schema.Types.ObjectId[];
  shipments: Schema.Types.ObjectId[];
  orders: Schema.Types.ObjectId[];
  validatePassword(password: string): Promise<boolean>;
  generateHash(password: string, salt: string): Promise<string>;
}

const UsersSchema = new mongoose.Schema<IUser>({
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
    default: "",
  },
  companyName: {
    type: String,
    default: "",
  },
  contactPhoneNumber: {
    type: String,
    default: "",
    match: /^(\+\d{1,3}[- ]?)?\d{10}$/,
  },
  country: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  zipcode: {
    type: String,
    default: "",
    match: /^\d+$/,
  },
  address: {
    type: String,
    default: "",
  },
  apartment: {
    type: String,
    default: "",
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
      default: [],
    },
  ],
  shipments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shipments",
      default: [],
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      default: [],
    },
  ],
});

UsersSchema.methods.validatePassword = async function (
  this: IUser,
  password: string
): Promise<boolean> {
  try {
    const hashedPassword = await bcrypt.hash(password, this.salt);
    return this.password === hashedPassword;
  } catch (error) {
    console.log(error);
    return false;
  }
};

UsersSchema.methods.generateHash = async function (
  password: string,
  salt: string
): Promise<string> {
  return bcrypt.hash(password, salt);
};

UsersSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);

    this.salt = salt;
    this.password = await this.generateHash(this.password, salt);

    next();
  } catch (error) {
    return next(error as Error);
  }
});

export default mongoose.model<IUser>("Users", UsersSchema);
