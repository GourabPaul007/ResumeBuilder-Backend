import { SingleSectionStyle } from "./_SingleSectionStyle";

export interface Project {
  // id: string;
  projectName: string;
  projectDetails: string[];
}

export interface Projects {
  title: string;
  data: Project[];
  style: SingleSectionStyle;
}
