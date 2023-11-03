import express from "express";
const router = express.Router();

import TeamMembersControllers from "../controllers/teamMembers.controllers";

router.get("/", TeamMembersControllers.getAll);
router.get("/:idMember", TeamMembersControllers.getById);
router.post("/", TeamMembersControllers.create);
router.put("/:idMember", TeamMembersControllers.updateById);
router.delete("/:idMember", TeamMembersControllers.deleteById);

export default router;
