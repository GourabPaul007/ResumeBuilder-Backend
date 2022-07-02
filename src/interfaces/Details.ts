import { Projects } from "./Project";
import { Works } from "./Work";
import { Educations } from "./Educations";
import { AboutWithContact } from "./AboutWithContact";
import { FormStyles } from "./FormStyles";
import { Skills } from "./Skills";
import { Others } from "./Others";

export interface Details {
  about: AboutWithContact;
  educations: Educations;
  skills: Skills;
  works: Works;
  projects: Projects;
  others: Others;
  accentColor: string;
  formStyles: FormStyles;
}
