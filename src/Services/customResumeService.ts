import ejs from "ejs";
import puppeteer from "puppeteer";
import path from "path";
import { checkHyperlink } from "../Helpers/checkHyperlink";
import { aboutWithContactSection1 } from "../resumeTemplates/custom/aboutWithContactSections";
import { educationsSection1 } from "../resumeTemplates/custom/educationsSections";
import { othersSection1 } from "../resumeTemplates/custom/othersSections";
import { projectsSection1 } from "../resumeTemplates/custom/projectsSections";
import { skillsSection1 } from "../resumeTemplates/custom/skillsSections";
import { worksSection1 } from "../resumeTemplates/custom/worksSection";
import { About } from "../interfaces/About";
import { Project } from "../interfaces/Project";
import { Work } from "../interfaces/Work";
import { Course } from "../interfaces/Course";

const organizeData = (element: any) => {
  // details.forEach(
  //   (element: {
  //     name?: any;
  //     x: number;
  //     y: number;
  //     w: number;
  //     h: number;
  //     data: About | Project[] | Work[] | Course[] | string[]|any;
  //   }) => {
  console.log("element", element);

  switch (element.name) {
    case "about":
      return aboutWithContactSection1(element);
    case "educations":
      return educationsSection1(element);
    case "skills":
      return skillsSection1(element);
    case "works":
      return worksSection1(element);
    case "projects":
      return projectsSection1(element);
    case "others":
      return othersSection1(element);
    default:
      break;
  }
  //   }
  // );
};

export const makePdf = async (details: any[]) => {
  const templateString = await ejs.renderFile(path.join(__dirname, "..", "resumeTemplates", `custom.ejs`), {
    isDark: false,
    checkHyperlink: checkHyperlink,
    blocks: details.map((detail: any) => {
      return organizeData(detail);
    }),
    // [
    //   aboutsSection1(details[0]),
    //   worksSection1(details[5]),
    //   projectsSection1(details[1]),
    //   educationsSection1(details[3]),
    //   skillsSection1(details[2]),
    //   othersSection1(details[4]),
    // ],
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
