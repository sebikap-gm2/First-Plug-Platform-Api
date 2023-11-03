const express = require("express");
const router = express.Router();

const TeamMembersControllers = require("../controllers/teamMembers.controllers");

router.get("/", TeamMembersControllers.getAll);
router.get("/:idMember", TeamMembersControllers.getById);
router.post("/", TeamMembersControllers.create);
router.put("/:idMember", TeamMembersControllers.updateById);
router.delete("/:idMember", TeamMembersControllers.deleteById);

module.exports = router;
