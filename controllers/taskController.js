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
export { getAllTasks };
