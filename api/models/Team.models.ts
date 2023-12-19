import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  members: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
});

export const TeamRepository = mongoose.model("Teams", TeamsSchema);
