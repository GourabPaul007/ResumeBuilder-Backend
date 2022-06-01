import express, { Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT: any = process.env.port || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

import resumeRoute from "./routes/resumeRoute";
import customResume from "./routes/customResume";
app.use("/api/resume", resumeRoute);
app.use("/api/custom", customResume);

app.listen(PORT, () => {
  console.log(`Server Running on Port`, PORT);
});
