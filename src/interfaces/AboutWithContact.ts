import { SingleSectionStyle } from "./_SingleSectionStyle";

export interface AboutWithContact {
  name: string;
  profession: string;
  address: string[];
  cityZip: string;
  phno: string;
  emails: string[];
  about: string;
  style: SingleSectionStyle;
}
