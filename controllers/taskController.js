import Task from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return the UPDATED task, not the old one
      runValidators: true, // apply schema rules (e.g. title required)
    });
    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

export { getAllTasks, createTask, updateTask };
