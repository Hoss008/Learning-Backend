import "dotenv/config";
import express from "express";
import taskRouter from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";
const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 3000;

app.use("/", taskRouter);
app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`server is listening at port:${PORT}`);
});
