import express, { Application } from "express";
import ejs from "ejs";
import data from "./data.json";
import cors from "cors";
import puppeteer from "puppeteer";
import { ICourse } from "./interfaces/Course";
import { Project } from "./interfaces/Project";
import { Work } from "./interfaces/Work";

const app: Application = express();
const PORT: Number = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const makePDF = async (templateString: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(templateString, {
    waitUntil: "networkidle2",
  });
  const pdf = await page.pdf({ format: "a4", printBackground: true });
  await browser.close();

  return pdf;
};

app.post("/post", (req, res) => {
  console.log("req.body", req.body);
  const details = req.body;
  console.log("details", details);

  // Getting the About block
  data.about = {
    name: details.about.name || null,
    fullAddress: details.about.address || null,
    cityZip: details.about.cityZip || null,
    phNo: details.about.phNo || null,
    emails: details.about.emails || [],
  };
  // Getting the Educations block
  data.educations =
    details.educations[0].courseName.length > 0
      ? details.educations.map((eachEducation: ICourse) => {
          eachEducation.courseName;
          return {
            courseName: eachEducation.courseName,
            nameOfOrganization: eachEducation.nameOfOrganization,
            courseResults: eachEducation.courseResults,
          };
        })
      : [];
  // Getting the Skills block
  data.skills = details.skills || [];

  // Getting the Work block
  data.works =
    details.works.length > 0 && details.works[0].organizationName.length > 0
      ? details.works.map((singleWork: Work) => {
          return {
            organizationName: singleWork.organizationName,
            workDetails: singleWork.workDetails.split("\n"),
          };
        })
      : [];

  // Getting the Projects Block
  data.projects =
    details.projects[0].projectName.length > 0
      ? details.projects.map((singleProject: Project) => {
          return {
            name: singleProject.projectName,
            details: singleProject.projectDetails,
          };
        })
      : [];
  data.others = details.others || [];
});

app.get("/", async (req, res) => {
  const templateString = await ejs.renderFile(
    __dirname + "/resumeTemplates/resume1.ejs",
    {
      about: data.about,
      educations: data.educations,
      skills: data.skills,
      works: data.works,
      projects: data.projects,
      others: data.others,
    }
  );
  // console.log(templateString);

  const pdf = await makePDF(templateString);
  res.header("Content-type", "application/pdf");
  res.send(pdf);

  //IMPORTANT: IF you want ot save the file, use this =>

  // (async () => {
  //   const browser = await puppeteer.launch();
  //   const page = await browser.newPage();
  //   await page.setContent(templateString, {
  //     waitUntil: 'networkidle2',
  //   });
  //   await page.pdf({ path: 'file.pdf', format: 'a4', printBackground: true });
  //   await browser.close();
  // })();
  // res.download('./file.pdf');
});

app.listen(5000, () => {
  console.log(`Server Running on Port`, PORT);
});
