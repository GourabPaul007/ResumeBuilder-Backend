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
    worksDiv: details[1],
    skillsDiv: details[2],
    educationsDiv: details[3],
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
