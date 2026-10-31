import "dotenv/config";
import express from "express";
import taskRouter from "./routes/taskRoutes.js";
import connectDB from "./config/db.js";
const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Welcome to the API Tasks");
// });

app.use("/", taskRouter);

app.listen(PORT, () => {
  console.log(`server is listening at port:${PORT}`);
});
