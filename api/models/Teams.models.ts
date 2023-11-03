import mongoose from "mongoose";

const TeamsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  teamMember: [
    {
      default: [],
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamMember",
    },
  ],
});

export default mongoose.model("Teams", TeamsSchema);
