import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT: Number = 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

import resumeRoute from "./routes/resumeRoute";
app.use("/api/resume", resumeRoute);

app.listen(5000, () => {
  console.log(`Server Running on Port`, PORT);
});
