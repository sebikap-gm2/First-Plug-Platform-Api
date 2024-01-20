import express from "express";
export const teamsRoutes = express.Router();

import { TeamsController } from "../controllers";

teamsRoutes.get("/", TeamsController.getAll);
