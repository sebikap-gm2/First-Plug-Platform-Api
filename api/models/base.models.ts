import { Schema } from "mongoose";
import { BaseEntity } from "../types";

const baseOptions = {
  timestamps: true,
};

export const BaseSchema = new Schema<BaseEntity>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  baseOptions
);
