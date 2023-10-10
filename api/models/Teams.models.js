const mongoose = require("mongoose");

const TeamsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  teamMember: {
    type: Array,
    require: false,
  },
});

const Teams = mongoose.model("Teams", TeamsSchema);

module.exports = Teams;
