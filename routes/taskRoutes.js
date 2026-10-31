import express from "express";
import { getAllTasks,createTask } from "../controllers/taskController.js";
const router = express.Router();

router.get("/allTasks", getAllTasks);
router.post("/", createTask);

export default router;
