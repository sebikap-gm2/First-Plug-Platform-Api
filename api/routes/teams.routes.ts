import express from "express";
import { TeamsController } from "../controllers";

export const teamsRoutes = express.Router();

teamsRoutes.get("/", TeamsController.getAll);
teamsRoutes.post("/", TeamsController.newTeam);
teamsRoutes.post("/addTeam", TeamsController.addMemberToTeam);
teamsRoutes.put("/:idTeam", TeamsController.updateTeam);
teamsRoutes.delete("/:idTeam", TeamsController.deleteTeam);
teamsRoutes.delete(
  "/deleteMember/:teamId/:memberId",
  TeamsController.deleteMemberFromTeam
);
