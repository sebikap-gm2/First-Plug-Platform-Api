const express = require("express");
const TeamsController = require("../controllers/teams.controllers");

const router = express.Router();

router.get("/", TeamsController.getAll);
router.post("/", TeamsController.newTeam);
router.post("/addTeam", TeamsController.addTeamMemberToTeam);
router.put("/:idTeam", TeamsController.updateTeam);
router.delete("/:idTeam", TeamsController.deleteTeam);
router.delete(
  "/deleteMember/:teamId/:memberId",
  TeamsController.deleteTeamMemberFromTeam
);

module.exports = router;
