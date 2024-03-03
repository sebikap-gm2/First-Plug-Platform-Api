import z from "zod";
import { memberValidation } from "../validations";

export type Member = z.infer<typeof memberValidation>;

export type MemberSchema = Member & {
  _id: string;
  __v: number;
};

export type CreationMember = Omit<MemberSchema, "_id" | "__v">;
