import { Document, Types } from "mongoose";

export interface BaseEntity extends Document {
  createdAt: Date;
  updatedAt: Date;
  tenantId: Types.ObjectId;
}
