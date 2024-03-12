import z from "zod";
import { MemberValidation } from "../validations";

export type Member = z.infer<typeof MemberValidation>;

export type MemberSchema = Member & {
  _id: string;
  __v: number;
};

export type CreationMember = Omit<MemberSchema, "_id" | "__v">;
