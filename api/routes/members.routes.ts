import express from "express";
export const membersRoutes = express.Router();

import { MembersController } from "../controllers";

membersRoutes.get("/", MembersController.getAll);
membersRoutes.get("/:idMember", MembersController.getById);
membersRoutes.post("/", MembersController.create);
membersRoutes.put("/:idMember", MembersController.updateById);
membersRoutes.delete("/:idMember", MembersController.deleteById);
