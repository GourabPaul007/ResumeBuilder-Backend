import ejs from "ejs";
import express from "express";
import puppeteer from "puppeteer";
import path from "path";
import { checkHyperlink } from "../Helpers/checkHyperlink";

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
  const templateString = await ejs.renderFile(path.join(__dirname, `custom.ejs`), {
    isDark: false,
    checkHyperlink: checkHyperlink,
    aboutDiv: details[0],
    projectsDiv: details[1],
    skillsDiv: details[2],
    educationsDiv: details[3],
    skills2: `
    <div
      style="
        position: absolute;
        margin-bottom: 8px;
        padding: 8px;
        background-color: white;
        left: ${details[2].x * 21.0}mm;
        top: ${details[2].y * 40}px;
        width: ${details[2].w * 21.0}mm;
        height: ${details[2].h * 40}px;
      "
    >
      <h1 style="font-weight: 600; color: #123456">Skills</h1>
      <div style="margin-top: 8px; padding-left: 8px">
        ${details[2].data
          .map((eachSkill: string) => {
            return `<div
            style="
              display: inline-block;
              padding: 4px 8px;
              margin: 4px;
              border-radius: 6px;
              color: #fff;
              background-color: #123456;
            "
          >
          ${eachSkill}
        </div>`;
          })
          .join("")}
      </div>
    </div>`,
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
