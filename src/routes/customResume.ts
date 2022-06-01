import express from "express";

const router = express.Router();

router.post("/custom-resume", express.json(), (req, res) => {
  const details = req.body;
  console.log(details);

  // resumeTemplateNo = details.template;
  // new ResumeService(resumeTemplateNo).setResumeData(details, details.resumeId);
  res.status(200).send({ message: "data received", receivedData: details });
});

export default router;
