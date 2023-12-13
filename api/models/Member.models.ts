import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
  },
  DNI: {
    type: String,
    require: false,
  },
  jobPosition: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  zipCode: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  appartment: {
    type: String,
    require: true,
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  timeSlotForDelivery: {
    type: String,
    require: true,
  },
  additionalInfo: {
    type: String,
    require: false,
    default: "",
  },
  teams: {
    type: Array,
    require: false,
    default: [],
  },
});

export const MemberRepository = mongoose.model("TeamMember", MemberSchema);
