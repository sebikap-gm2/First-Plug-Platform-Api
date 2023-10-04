const mongoose = require("mongoose");

const TeamsSchema = mongoose.Schema({
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

const Teams = mongoose.model("Teams", TeamsSchema);

module.exports = Teams;
