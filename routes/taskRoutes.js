import express from "express";
import { getAllTasks,createTask,updateTask } from "../controllers/taskController.js";
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.patch("/:id", updateTask);

export default router;
