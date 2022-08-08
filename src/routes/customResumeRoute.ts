import express from "express";
import { CustomResumeService } from "../Services/customResumeService";

const router = express.Router();

router.get("/get-pdf/:resumeID", async (req, res) => {
  const params = req.params;

  const customResumeService = new CustomResumeService();
  const { success, errMsg, data } = await customResumeService.getPdfDataFromFirebase(params.resumeID);
  // In case error occurs and success is false(data is not found), it will send the error message and exit the function
  if (success == false) {
    res.status(400).send({ error: errMsg });
    return;
  }
  // If no error, continue with data
  const { blocks, formStyles } = data;
  // If resume document have empty data, send error msg to cliend and exit the function
  if (customResumeService.checkResumeDocument(formStyles) == false) {
    res.status(400).send({ error: "resume document doesnt have enough data(formstyles)" });
    return;
  }

  const pdf = await customResumeService.makePdf(blocks, formStyles);
  res.header("Content-type", "application/pdf");
  res.send(pdf);
});

router.post("/custom-resume", express.json(), async (req, res) => {
  const { blocks, formStyles } = req.body;
  console.log("details received", blocks);
  const pdf = await new CustomResumeService().makePdf(blocks, formStyles);
  // resumeTemplateNo = details.template;
  // new ResumeService(resumeTemplateNo).setResumeData(details, details.resumeId);
  res.header("Content-type", "application/pdf");
  res.send(pdf);
  // res.status(200).send({ message: "data received", receivedData: details });
});

export default router;
