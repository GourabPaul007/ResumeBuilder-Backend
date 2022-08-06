import express from "express";
import { DocumentData, getFirestore } from "firebase-admin/firestore";
import { firebaseApp } from "..";
import { makePdf } from "../Services/customResumeService";

const router = express.Router();

router.get("/get-pdf/:id", async (req, res) => {
  const params = req.params;
  const defaultFirestore = getFirestore(firebaseApp);
  if (params.id != "" || params.id != null || params.id != undefined) {
    defaultFirestore
      .collection("resumes")
      .doc(params.id)
      .get()
      .then(async (doc: DocumentData) => {
        console.log("RESUME DATA: ", doc.data().resumeData);
        const pdf = await makePdf(doc.data().resumeData.blocks, doc.data().resumeData.formStyles);
        res.header("Content-type", "application/pdf");
        res.send(pdf);
      });
  } else {
    console.log("ID not found!");
  }
});

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
