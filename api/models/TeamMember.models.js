const mongoose = require("mongoose");

const TeamsMemberSchema = mongoose.Schema({
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
  DNI: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
  adress: {
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
  },
  teams: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teams",
    },
  ],
});

const TeamMember = mongoose.model("TeamMember", TeamsMemberSchema);

module.exports = TeamMember;
