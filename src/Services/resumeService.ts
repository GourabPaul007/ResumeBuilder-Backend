// import ejs from "ejs";
// import path from "path";
// import { isDark } from "../Helpers/checkColor";
// import { checkHyperlink } from "../Helpers/checkHyperlink";
// import puppeteer from "puppeteer";
// // import puppeteer from "puppeteer-core";
// import htmlPdf from "html-pdf";
// import { Details } from "../interfaces/Details";
// import { Work } from "../interfaces/Work";
// import { Project } from "../interfaces/Project";
// import { Course } from "../interfaces/Educations";
// import { addResume, deleteResumeById, findResumeById, resumes } from "../repositories/resumeRepository";
// import { ResumeBuildData } from "../interfaces/ResumeBuildData";

// export class ResumeService {
//   _resumeTemplateNo: string = "3";
//   // data: Details = data1;

//   constructor(resumeTemplateNo = "3") {
//     this._resumeTemplateNo;
//   }

//   setResumeData = (details: Details, resumeId: string) => {
//     const resumeData: ResumeBuildData = {
//       template: "1",
//       about: {
//         name: "",
//         profession: "",
//         address: [""],
//         cityZip: "",
//         phno: "",
//         emails: [""],
//         about: "",
//       },
//       educations: [
//         {
//           courseName: "",
//           organizationName: "",
//           courseResults: "",
//         },
//       ],
//       skills: [""],
//       works: [
//         {
//           organizationName: "",
//           workDetails: [""],
//         },
//       ],
//       projects: [
//         {
//           name: "",
//           details: [""],
//         },
//       ],
//       others: [""],
//       accentColor: "",
//     };

//     // GETTING DATA FROM "details" & SETTING IT TO resumeData
//     // Getting the About block
//     resumeData.about = {
//       name: details.about.name,
//       profession: details.about.profession,
//       address: details.about.address,
//       cityZip: details.about.cityZip,
//       phno: details.about.phno,
//       emails: details.about.emails,
//       about: details.about.about,
//     };
//     // Getting the Educations block
//     resumeData.educations =
//       details.educations[0].courseName.length > 0
//         ? details.educations.map((eachEducation: Course) => {
//             return {
//               courseName: eachEducation.courseName,
//               organizationName: eachEducation.organizationName,
//               courseResults: eachEducation.courseResults,
//             };
//           })
//         : [];
//     // Getting the Skills block
//     resumeData.skills = details.skills;

//     // Getting the Work block
//     resumeData.works =
//       details.works.length > 0 && details.works[0].workOrganizationName && details.works[0].workDetails
//         ? details.works.map((singleWork: Work) => {
//             return {
//               organizationName: singleWork.workOrganizationName,
//               workDetails: singleWork.workDetails,
//             };
//           })
//         : [];

//     // Getting the Projects Block
//     resumeData.projects =
//       details.projects.length > 0 && details.projects[0].projectName && details.projects[0].projectDetails
//         ? details.projects.map((singleProject: Project) => {
//             return {
//               name: singleProject.projectName,
//               details: singleProject.projectDetails,
//             };
//           })
//         : [];

//     // Getting Others Stuff
//     resumeData.others = details.others;

//     // Getting the accent Color
//     resumeData.accentColor = details.accentColor;

//     // Add the resume to the in memory database
//     addResume(resumeId, resumeData);
//   };

//   // =========================================================================================================================================
//   // =========================================================================================================================================
//   // =========================================================================================================================================
//   // Render the pdf with pre-collected data from [setResumeData] method
//   async renderPDF(id: string) {
//     const selectedResume = findResumeById(id);

//     if (selectedResume == undefined) {
//       return;
//     }
//     const resumeData = selectedResume.resumeData;

//     const templateString = await ejs.renderFile(
//       path.join(__dirname, "..", "resumeTemplates", `resume${this._resumeTemplateNo}.ejs`),
//       {
//         isDark: isDark,
//         checkHyperlink: checkHyperlink,
//         about: resumeData.about,
//         educations: resumeData.educations,
//         skills: resumeData.skills,
//         works: resumeData.works,
//         projects: resumeData.projects,
//         others: resumeData.others,
//         accentColor: resumeData.accentColor,
//       }
//     );
//     const pdf = await this.makePDF(templateString);
//     console.log("pdf in renderPdf ", pdf);

//     // Delete after pdf is downloaded by user
//     const timeAfterDelete = 5; //minutes
//     // setTimeout(() => {
//     deleteResumeById(id);
//     // }, 10 * 1000);

//     return pdf;
//   }

//   async makePDF(templateString: string) {
//     // Puppeteer
//     const browser = await puppeteer.launch({
//       headless: true,
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });
//     const page = await browser.newPage();
//     await page.setContent(templateString, {
//       waitUntil: "networkidle2",
//     });
//     const pdf = await page.pdf({ format: "a4", printBackground: true });
//     await browser.close();
//     return pdf;

//     //// htmlPdf
//     // return new Promise((resolve, reject) => {
//     //   htmlPdf
//     //     .create(templateString, { format: "A4", orientation: "portrait" })
//     //     .toBuffer((err, buffer) => {
//     //       if (err) reject(err);
//     //       else resolve(buffer);
//     //     });
//     // });

//     //// JsPdf
//     // const doc = new jsPDF();
//     // doc.html(templateString);
//     // return doc;
//   }

//   // // To Save PDF on Server for some reason idk why i made this...
//   // async savePDF(templateString: string) {
//   //   const browser = await puppeteer.launch();
//   //   const page = await browser.newPage();
//   //   await page.setContent(templateString, {
//   //     waitUntil: "networkidle2",
//   //   });
//   //   await page.pdf({
//   //     path: "../file.pdf",
//   //     format: "a4",
//   //     printBackground: true,
//   //   });
//   //   await browser.close();
//   // }
// }

// // const path = require("path");
// // const ejs = require("ejs");
// // const { workerData, parentPort } = require("worker_threads");
// // const { isDark } = require("../Helpers/checkColor");
// // const { checkHyperlink } = require("../Helpers/checkHyperlink");

// // parentPort.on("message", async () => {
// //   const result = await createPDF();
// //   parentPort.postMessage(result);
// // });

// // async function createPDF(): Promise<any> {
// //   const templateString = await ejs.renderFile(
// //     path.join(
// //       __dirname,
// //       "..",
// //       "resumeTemplates",
// //       `resume${workerData.resumeTemplateNo}.ejs`
// //     ),
// //     {
// //       isDark: isDark,
// //       checkHyperlink: checkHyperlink,
// //       about: workerData.about,
// //       educations: workerData.educations,
// //       skills: workerData.skills,
// //       works: workerData.works,
// //       projects: workerData.projects,
// //       others: workerData.others,
// //       accentColor: workerData.accentColor,
// //     }
// //   );
// //   const pdf = await workerData.makePDF(templateString);
// //   return pdf;
// // }
