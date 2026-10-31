import Task from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        task: "Task Finished ",
        type: "Done",
      },
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

export { getAllTasks, createTask };
