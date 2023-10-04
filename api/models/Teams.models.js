const mongoose = require("mongoose");

TeamsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  teamMember: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeamMember",
    },
  ],
});

const Teams = mongoose.model("Teams", TeamsSchema);

module.exports = Teams;
