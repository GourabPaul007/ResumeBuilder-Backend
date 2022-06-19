import express from "express";
import { makePdf } from "../Services/customResumeService";

const router = express.Router();

router.post("/custom-resume", express.json(), async (req, res) => {
  const { blocks, formStyles } = req.body;
  console.log("details received", blocks);
  const pdf = await makePdf(blocks, formStyles);
  // resumeTemplateNo = details.template;
  // new ResumeService(resumeTemplateNo).setResumeData(details, details.resumeId);
  res.header("Content-type", "application/pdf");
  res.send(pdf);
  // res.status(200).send({ message: "data received", receivedData: details });
});

export default router;
