import ejs from "ejs";
import express from "express";
import puppeteer from "puppeteer";
import path from "path";
import { checkHyperlink } from "../Helpers/checkHyperlink";
import { skillsSection1 } from "../resumeTemplates/custom/skillsSections";
import { aboutsSection1 } from "../resumeTemplates/custom/aboutsSections";
import { educationsSection1 } from "../resumeTemplates/custom/educationsSections";
import { projectsSection1 } from "../resumeTemplates/custom/projectsSections";
import { othersSection1 } from "../resumeTemplates/custom/othersSections";
import { worksSection1 } from "../resumeTemplates/custom/worksSection";

const router = express.Router();

router.post("/custom-resume", express.json(), async (req, res) => {
  const details = req.body;
  console.log("details received", details);
  const pdf = await makePdf(details);
  // resumeTemplateNo = details.template;
  // new ResumeService(resumeTemplateNo).setResumeData(details, details.resumeId);
  res.header("Content-type", "application/pdf");
  res.send(pdf);
  // res.status(200).send({ message: "data received", receivedData: details });
});

export default router;

const makePdf = async (details: any) => {
  const templateString = await ejs.renderFile(path.join(__dirname, "..", "resumeTemplates", `custom.ejs`), {
    isDark: false,
    checkHyperlink: checkHyperlink,
    blocks: [
      aboutsSection1(details[0]),
      worksSection1(details[5]),
      projectsSection1(details[1]),
      educationsSection1(details[3]),
      skillsSection1(details[2]),
      othersSection1(details[4]),
    ],
  });
  // Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setContent(templateString, {
    waitUntil: "networkidle2",
  });
  const pdf = await page.pdf({
    format: "a4",
    printBackground: true,
    margin: { left: 24, right: 24, top: 24, bottom: 24 },
  });
  await browser.close();
  return pdf;
};
