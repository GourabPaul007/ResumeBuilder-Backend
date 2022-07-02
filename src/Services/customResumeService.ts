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
import { AboutWithContact } from "../interfaces/AboutWithContact";
import { Project } from "../interfaces/Project";
import { Work } from "../interfaces/Work";
import { Course } from "../interfaces/Educations";
import { FormStyles } from "../interfaces/FormStyles";
import { AboutSection1 } from "../resumeTemplates/custom/AboutSections";
import { ContactSection1 } from "../resumeTemplates/custom/ContactSections";

const organizeData = (element: any, formStyles: FormStyles) => {
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
    case "aboutwithcontact1":
      return aboutWithContactSection1(element, formStyles);
    case "about1":
      return AboutSection1(element, formStyles);
    case "contact1":
      return ContactSection1(element, formStyles);
    case "educations1":
      return educationsSection1(element, formStyles);
    case "skills1":
      return skillsSection1(element, formStyles);
    case "works1":
      return worksSection1(element, formStyles);
    case "projects1":
      return projectsSection1(element, formStyles);
    case "others1":
      return othersSection1(element, formStyles);
    default:
      break;
  }
  //   }
  // );
};

export const makePdf = async (blocks: any[], formStyles: FormStyles) => {
  console.log(formStyles.titleFillColor);

  const templateString = await ejs.renderFile(path.join(__dirname, "..", "resumeTemplates", `custom.ejs`), {
    isDark: false,
    checkHyperlink: checkHyperlink,
    blocks: blocks.map((blockDetail: any) => {
      return organizeData(blockDetail, formStyles);
    }),
    formStyles: formStyles,
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
    margin: { left: 0, right: 0, top: 24, bottom: 24 },
  });
  await browser.close();
  return pdf;
};
