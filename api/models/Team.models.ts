import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  teamMembers: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamMember",
    },
  ],
});

export const TeamRepository = mongoose.model("Teams", TeamsSchema);
