import express from "express";
import { getAllTasks } from "../controllers/taskController.js";
const router = express.Router();

router.get("/allTasks", getAllTasks);

export default router;
