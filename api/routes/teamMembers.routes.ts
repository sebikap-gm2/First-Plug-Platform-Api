import express from "express";
const router = express.Router();

import { TeamMembersController } from "../controllers/teamMembers.controller";

router.get("/", TeamMembersController.getAll);
router.get("/:idMember", TeamMembersController.getById);
router.post("/", TeamMembersController.create);
router.put("/:idMember", TeamMembersController.updateById);
router.delete("/:idMember", TeamMembersController.deleteById);

export { router as teamMembersRoutes };
