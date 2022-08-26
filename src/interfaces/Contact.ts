import { SingleSectionStyle } from "./_SingleSectionStyle";

export interface Contact {
  address: string[];
  phno: string;
  emails: string[];
}

export interface ContactSection {
  title: string;
  flipped: boolean;
  data: Contact;
  style: SingleSectionStyle;
}
