import ejs from "ejs";
import puppeteer from "puppeteer";
import path from "path";
import { checkHyperlink } from "../Helpers/checkHyperlink";
import { AboutWithContactSection1, AboutWithContactSection2 } from "../resumeTemplates/custom/AboutWithContactSections";
import { EducationsSection1, EducationsSection2 } from "../resumeTemplates/custom/EducationsSections";
import { OthersSection1 } from "../resumeTemplates/custom/OthersSections";
import { ProjectsSection1 } from "../resumeTemplates/custom/ProjectsSections";
import { SkillsSection1, SkillsSection2 } from "../resumeTemplates/custom/SkillsSections";
import { WorksSection1 } from "../resumeTemplates/custom/WorksSection";
import { FormStyles } from "../interfaces/FormStyles";
import { AboutSection1 } from "../resumeTemplates/custom/AboutSections";
import { ContactSection1, ContactSection2 } from "../resumeTemplates/custom/ContactSections";
import { RatingsSection1 } from "../resumeTemplates/custom/RatingsSections";
import { DocumentData, getFirestore } from "firebase-admin/firestore";
import { firebaseApp } from "..";

export class CustomResumeService {
  /**
   * takes resume data from firebase with provided resumeID and returns the resume data
   * @param resumeID the ID which identfies resume in firebase firestore
   * @returns resume data from firebase to makePdf
   */
  getPdfDataFromFirebase = async (resumeID: string) => {
    let blocks: any[] = [];
    let formStyles: FormStyles = {
      titleFullWidth: false,
      titleFilled: false,
      titleUnderline: false,
      titleColor: "",
      titleFillColor: "",
      accentColor: "",
    };

    if (resumeID == "" || resumeID == null || resumeID == undefined)
      return { success: false, errMsg: "resumeID not found.", data: { blocks, formStyles } };

    const defaultFirestore = getFirestore(firebaseApp);

    const documentRef = defaultFirestore.collection("resumes").doc(resumeID);
    await documentRef.get().then((doc: DocumentData) => {
      blocks = doc.data().resumeData.blocks;
      formStyles = doc.data().resumeData.formStyles;
    });
    return { success: true, errMsg: "", data: { blocks, formStyles } };
  };

  /**
   * checks if the document is good/correct
   * @param formStyles the global formStyles
   * @returns true or false
   */
  checkResumeDocument = (formStyles: FormStyles) => {
    if (formStyles.accentColor != "" && formStyles.titleColor != "" && formStyles.titleFillColor != "") return true;
    return false;
  };

  /**
   * Gets block name and returns section according to the name
   * @param element single block of resume
   * @param formStyles global styles of resume
   * @returns single section of resume
   */
  organizeData = (element: any, formStyles: FormStyles) => {
    // console.log("element", element.data);
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
  };

  /**
   * makes the actual pdf from blocks and styles
   * @param blocks the resume blocks
   * @param formStyles the resume global styles
   * @returns pdf document
   */
  makePdf = async (blocks: any[], formStyles: FormStyles) => {
    console.log(formStyles.titleFillColor);

    const templateString = await ejs.renderFile(path.join(__dirname, "..", "resumeTemplates", `custom.ejs`), {
      isDark: false,
      checkHyperlink: checkHyperlink,
      blocks: blocks.map((blockDetail: any) => {
        return this.organizeData(blockDetail, formStyles);
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
      waitUntil: "load",
    });
    const pdf = await page.pdf({
      format: "a4",
      printBackground: true,
      margin: { left: 0, right: 0, top: 24, bottom: 24 },
    });
    await browser.close();
    return pdf;
  };
}
