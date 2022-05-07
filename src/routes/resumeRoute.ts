import express from "express";
import { ResumeService } from "../Services/resumeService";

const router = express.Router();

let resumeTemplateNo: string = "3";

router.post("/post-data", express.json(), (req, res) => {
  const details = req.body;
  resumeTemplateNo = details.template;
  new ResumeService(resumeTemplateNo).setResumeData(details, details.resumeId);
  res.status(200).send({ message: "data received" });
});

router.get("/get-pdf/:id", async (req, res) => {
  const { id } = req.params;
  const pdf = await new ResumeService(resumeTemplateNo).renderPDF(id);
  // if (pdf == undefined) {
  //   res.header("Content-type", "application/json");
  //   res.send({
  //     mmessage:
  //       "sorry, due to save cost on server we have to delete stale pdfs. please fill the form again.",
  //   });
  // } else {
  console.log("pdf", pdf);

  res.header("Content-type", "application/pdf");
  res.send(pdf);
  // }
});

export default router;

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// IDK WHY I WANTED TO TRY WORKER THREADS
// if (isMainThread) {
//   const worker = new Worker(__dirname + __resumeServiceWorkerFile, {
//     workerData: { path: __dirname + "../Services/resumeService.ts" },
//   });

//   worker.on("message", (pdf) => {
//     res.header("Content-type", "application/pdf");
//     res.send(pdf);
//   });
//   worker.on("error", (e: Error) => {
//     console.error(e);
//   });
//   worker.on("exit", (code) => {
//     if (code !== 0)
//       // reject(new Error(`Worker stopped with exit code ${code}`));
//       console.log(`Worker stopped with exit code ${code}`);
//   });
// }
// function reject(arg0: Error) {
//   throw new Error("Function not implemented.");
// }
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
