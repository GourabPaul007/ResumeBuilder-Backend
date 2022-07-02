export const getUrlDomainName = (link: string, color?: string, margins?: string) => {
  link = link.toLowerCase();
  if (link.includes("linkedin")) return "linkedin";
  if (link.includes("github")) return "github";
  if (link.includes("mail") || link.includes("@")) return "email";
  return "other";
};
