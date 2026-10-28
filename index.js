import "dotenv/config";
import express from "express";
import taskRouter from "./routes/taskRoutes.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Tasks API");
});

app.use("/", taskRouter);

app.listen(PORT, () => {
  console.log(`server is listening at port:${PORT}`);
});
