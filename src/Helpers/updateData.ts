import data from "../data.json";
import { Course } from "../interfaces/Course";
import { Project } from "../interfaces/Project";
import { Work } from "../interfaces/Work";
import { Details } from "../interfaces/Details";

export const setResumeData = (details: Details) => {
  // Getting the About block
  data.about = {
    name: details.about.name || "",
    profession: details.about.profession || "",
    fullAddress: details.about.address || "",
    cityZip: details.about.cityZip || "",
    phNo: details.about.phNo || "",
    emails: details.about.emails || [],
    about: details.about.about || "",
  };
  // Getting the Educations block
  data.educations =
    details.educations[0].courseName.length > 0
      ? details.educations.map((eachEducation: Course) => {
          eachEducation.courseName;
          return {
            courseName: eachEducation.courseName,
            organizationName: eachEducation.organizationName,
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
            workDetails: singleWork.workDetails.trim().split("\n"),
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

  // Getting Others Stuff
  data.others = details.others || [];

  // Getting the accent Color
  data.accentColor = details.accentColor || "";
};
