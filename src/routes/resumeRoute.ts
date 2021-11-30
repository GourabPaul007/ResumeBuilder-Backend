import express from "express";
import ejs from "ejs";
import data from "../data.json";
import { setResumeData } from "../Helpers/updateData";
import { makePDF } from "../Helpers/makePDF";
import path from "path";
import { isDark } from "../Helpers/checkColor";

const router = express.Router();

let resumeTemplate: string = "1";

router.post("/post-data", (req, res) => {
  const details = req.body;
  console.log("details", details);
  resumeTemplate = details.template;
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
      `resume${resumeTemplate}.ejs`
    ),
    {
      isDark: isDark,
      about: data.about,
      educations: data.educations,
      skills: data.skills,
      works: data.works,
      projects: data.projects,
      others: data.others,
      accentColor: data.accentColor,
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
