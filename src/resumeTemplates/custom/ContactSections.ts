import { getUrlDomainName } from "../../Helpers/getUrlDomainName";
import { getIcon } from "../../Helpers/Icons";
import { About } from "../../interfaces/About";
import { Contact } from "../../interfaces/Contact";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const ContactSection1 = (
  contact: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: Contact;
  },
  formStyles: FormStyles
) => {
  return /* html */ `
  <div style="${SectionStyles.sectionWrapper({
    x: contact.x,
    y: contact.y,
    w: contact.w,
    h: contact.h,
    // bg: "black",
  })}">
    <div style="display: flex; flex-direction: column; align-items: flex-end; font-weight: 500; font-size: 14px; margin-top: 24px;">
      <div style="display: flex; align-items: center; margin: 4px">
        ${contact.data.address}&nbsp;&nbsp;
        ${getIcon({ name: "address", color: formStyles.accentColor })}
      </div>
      <div style=" display: flex; align-items: center; margin: 4px">
        ${contact.data.phno}&nbsp;&nbsp;
        ${getIcon({ name: "phone", color: formStyles.accentColor })}
      </div>
      ${contact.data.emails
        .map((eachLink) => {
          return /* html */ `
          <div key={eachLink} style="display: flex; align-items: center; margin: 4px">
            ${eachLink}&nbsp;&nbsp;
            ${getIcon({
              name: getUrlDomainName(eachLink),
              color: formStyles.accentColor,
            })}
          </div>
        `;
        })
        .join("")}
    </div>
  </div>
  `;
};
