const express = require("express");
const TeamsController = require("../controllers/teams.controllers");
const router = express.Router();

router.get("/", TeamsController.getAll);
router.post("/", TeamsController.newTeam);
router.put("/:idTeam", TeamsController.updateTeam);
router.delete("/:idTeam", TeamsController.deleteTeam);

module.exports = router;
