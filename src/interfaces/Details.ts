import { Project } from "./Project";
import { Work } from "./Work";
import { Course } from "./Course";
import { About } from "./About";
import { FormStyles } from "./FormStyles";

export interface Details {
  about: About;
  educations: Course[];
  skills: string[];
  works: Work[];
  projects: Project[];
  others: string[];
  accentColor: string;
  formStyles: FormStyles;
}
