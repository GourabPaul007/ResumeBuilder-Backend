import { Project } from "./Project";
import { Work } from "./Work";
import { Course } from "./Course";
import { About } from "./About";

export interface Details {
  about: About;
  educations: Course[];
  skills: [""];
  works: Work[];
  projects: Project[];
  others: [""];
  accentColor: "";
}
