import express from "express";
import ejs from "ejs";
import data from "../data.json";
import data2 from "../data2.json";
import { setResumeData } from "../Helpers/updateData";
import { makePDF } from "../Helpers/makePDF";
import path from "path";
import { isDark } from "../Helpers/checkColor";
import { checkHyperLink } from "../Helpers/checkHyperlink";

const router = express.Router();

let resumeTemplateNo: string = "3";

router.post("/post-data", (req, res) => {
  const details = req.body;
  console.log("details", details);
  resumeTemplateNo = details.template;
  setResumeData(details);
});

// router.post("/post-img", (req, res) => {
//   console.log("Server Image", req.body);
//   res.status(200).send(req.body);
// });

router.get("/get-pdf", async (req, res) => {
  const templateString = await ejs.renderFile(
    path.join(
      __dirname,
      "..",
      "resumeTemplates",
      `resume${resumeTemplateNo}.ejs`
    ),
    {
      isDark: isDark,
      checkHyperlink: checkHyperLink,
      about: data2.about,
      educations: data2.educations,
      skills: data2.skills,
      works: data2.works,
      projects: data2.projects,
      others: data2.others,
      accentColor: data2.accentColor,
    }
  );
  const pdf = await makePDF(templateString);
  res.header("Content-type", "application/pdf");
  res.send(pdf);

  //IMPORTANT: IF you want ot save the file, use this =>
  // savePDF(templateString);
  // res.download('./file.pdf');
});

export default router;
