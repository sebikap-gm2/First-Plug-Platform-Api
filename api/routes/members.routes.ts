import express from "express";
export const membersRoutes = express.Router();

import { MembersController } from "../controllers";
import { validateData } from "../middleware";
import { memberCollection } from "../validations";

membersRoutes.get("/", MembersController.getAll);
membersRoutes.get("/:id", MembersController.getById);
membersRoutes.post("/", MembersController.create);
membersRoutes.post(
  "/bulkcreate",
  validateData(memberCollection),
  MembersController.bulkCreate
);
membersRoutes.put("/:id", MembersController.updateById);
membersRoutes.delete("/:id", MembersController.deleteById);
