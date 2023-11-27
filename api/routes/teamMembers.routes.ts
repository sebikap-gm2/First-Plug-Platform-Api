import express from "express";
export const teamMembersRoutes = express.Router();

import { TeamMembersController } from "../controllers";

teamMembersRoutes.get("/", TeamMembersController.getAll);
teamMembersRoutes.get("/:idMember", TeamMembersController.getById);
teamMembersRoutes.post("/", TeamMembersController.create);
teamMembersRoutes.put("/:idMember", TeamMembersController.updateById);
teamMembersRoutes.delete("/:idMember", TeamMembersController.deleteById);
