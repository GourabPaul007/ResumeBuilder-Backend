import ejs from "ejs";
import puppeteer from "puppeteer";
import path from "path";
import { checkHyperlink } from "../Helpers/checkHyperlink";
import { AboutWithContactSection1, AboutWithContactSection2 } from "../resumeTemplates/custom/aboutWithContactSections";
import { EducationsSection1, EducationsSection2 } from "../resumeTemplates/custom/EducationsSections";
import { OthersSection1 } from "../resumeTemplates/custom/othersSections";
import { ProjectsSection1 } from "../resumeTemplates/custom/projectsSections";
import { SkillsSection1, SkillsSection2 } from "../resumeTemplates/custom/skillsSections";
import { WorksSection1 } from "../resumeTemplates/custom/worksSection";
import { FormStyles } from "../interfaces/FormStyles";
import { AboutSection1 } from "../resumeTemplates/custom/AboutSections";
import { ContactSection1, ContactSection2 } from "../resumeTemplates/custom/ContactSections";
import { RatingsSection1 } from "../resumeTemplates/custom/RatingsSections";

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
      return AboutWithContactSection1(element, formStyles);
    case "aboutwithcontact2":
      return AboutWithContactSection2(element, formStyles);
    case "about1":
      return AboutSection1(element, formStyles);
    case "contact1":
      return ContactSection1(element, formStyles);
    case "contact2":
      return ContactSection2(element, formStyles);
    case "educations1":
      return EducationsSection1(element, formStyles);
    case "educations2":
      return EducationsSection2(element, formStyles);
    case "skills1":
      return SkillsSection1(element, formStyles);
    case "skills2":
      return SkillsSection2(element, formStyles);
    case "works1":
      return WorksSection1(element, formStyles);
    case "projects1":
      return ProjectsSection1(element, formStyles);
    case "ratings1":
      return RatingsSection1(element, formStyles);
    case "others1":
      return OthersSection1(element, formStyles);
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
