import { SingleSectionStyle } from "./_SingleSectionStyle";

export interface Work {
  // id: string;
  workOrganizationName: string;
  workDetails: string[];
  workDuration: string;
}

export interface Works {
  title: string;
  data: Work[];
  style: SingleSectionStyle;
}
