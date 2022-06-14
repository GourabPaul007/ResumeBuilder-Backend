// data type for building the pdf, not the type that will come from api request
export interface ResumeBuildData {
  template: string;
  about: {
    name: string;
    profession: string;
    address: string[];
    cityZip: string;
    phno: string;
    emails: string[];
    about: string;
  };
  educations: {
    courseName: string;
    organizationName: string;
    courseResults: string;
  }[];
  skills: string[];
  works: {
    organizationName: string;
    workDetails: string[];
  }[];
  projects: {
    name: string;
    details: string[];
  }[];
  others: string[];
  accentColor: string;
}
