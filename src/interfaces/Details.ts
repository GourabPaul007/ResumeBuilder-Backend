import { Projects } from "./Project";
import { Works } from "./Work";
import { Educations } from "./Educations";
import { About } from "./About";
import { FormStyles } from "./FormStyles";
import { Skills } from "./Skills";
import { Others } from "./Others";

export interface Details {
  about: About;
  educations: Educations;
  skills: Skills;
  works: Works;
  projects: Projects;
  others: Others;
  accentColor: string;
  formStyles: FormStyles;
}
