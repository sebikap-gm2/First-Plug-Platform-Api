import { Document, Types } from "mongoose";

export interface BaseEntity extends Document<string> {
  createdAt: Date;
  updatedAt: Date;
  tenantId: Types.ObjectId;
}
