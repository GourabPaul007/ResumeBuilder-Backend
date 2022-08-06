import express, { Application } from "express";
import cors from "cors";

import { initializeApp } from "firebase-admin/app";

const app: Application = express();
const PORT: any = process.env.port || 5000;

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// FIREBASE STUFF
var admin = require("firebase-admin");
var serviceAccount = require("../firebase-admin-key.json");
export const firebaseApp = initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import resumeRoute from "./routes/resumeRoute";
import customResume from "./routes/customResumeRoute";
app.use("/api/resume", resumeRoute);
app.use("/api/custom", customResume);

app.listen(PORT, () => {
  console.log(`Server Running on Port`, PORT);
});
