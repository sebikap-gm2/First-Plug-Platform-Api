import { Schema } from "mongoose";
import { BaseEntity } from "../types";

const baseOptions = {
  timestamps: true,
};

export const BaseSchema = new Schema<BaseEntity>(
  {
    tenantName: {
      type: Schema.Types.String,
      required: true,
      default: null,
    },
  },
  baseOptions
);
