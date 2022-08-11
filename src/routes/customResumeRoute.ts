import express from "express";
import { CustomResumeService } from "../Services/customResumeService";

const router = express.Router();

router.get("/get-pdf/:userID/:resumeID", async (req, res) => {
  const params = req.params;
  console.log(params);

  // Handle Missing Data
  if (params.userID == "") {
    res.status(400).send("missing user ID");
    return;
  }
  if (params.resumeID == "") {
    res.status(400).send("missing resume ID");
    return;
  }

  // Start Job
  const customResumeService = new CustomResumeService();
  const { success, errMsg, data } = await customResumeService.getPdfDataFromFirebase(params.resumeID);
  // In case error occurs and success is false(data is not found), it will send the error message and exit the function
  if (success == false) {
    res.status(400).send(errMsg);
    return;
  }
  // If no error, continue with data
  const { blocks, formStyles } = data;
  // If resume document have empty data, send error msg to cliend and exit the function
  if (customResumeService.checkResumeDocument(formStyles) == false) {
    res.status(400).send("resume document doesnt have enough data(formstyles)");
    return;
  }

  const pdf = await customResumeService.makePdf(blocks, formStyles);
  res.header("Content-type", "application/pdf");
  res.send(pdf);

  // Delete resume data from firebase after done
  customResumeService.deletePdfDataFromFirebase(params.resumeID);
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
