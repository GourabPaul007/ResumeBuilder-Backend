export interface Contact {
  address: string[];
  phno: string;
  emails: string[];
}

export interface ContactSection {
  title: string;
  flipped: boolean;
  data: Contact;
}
