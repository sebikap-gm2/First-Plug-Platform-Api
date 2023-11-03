import express from "express";
import TeamsController from "../controllers/teams.controllers";

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

export default router;
