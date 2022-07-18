import { getUrlDomainName } from "../../Helpers/getUrlDomainName";
import { getIcon } from "../../Helpers/Icons";
import { About } from "../../interfaces/About";
import { Contact, ContactSection } from "../../interfaces/Contact";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const ContactSection1 = (
  contact: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: ContactSection;
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
    ${
      contact.data.title === ""
        ? ``
        : `<div style="${SectionStyles.blockTitleDiv(formStyles, contact.data.flipped)}">
            <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
              ${contact.data.title}
            </h2>
          </div>`
    }
    <div style="
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-weight: 500;
      font-size: 14px;
      margin-top: ${contact.data.title === "" ? 14 : 0}px;"
    >
      <div style="display: flex; align-items: center; margin: 3px">
        ${contact.data.data.address}&nbsp;&nbsp;
        ${getIcon({ name: "address", color: formStyles.accentColor })}
      </div>
      <div style=" display: flex; align-items: center; margin: 3px">
        ${contact.data.data.phno}&nbsp;&nbsp;
        ${getIcon({ name: "phone", color: formStyles.accentColor })}
      </div>
      ${contact.data.data.emails
        .map((eachLink) => {
          return /* html */ `
          <div key={eachLink} style="display: flex; align-items: center; margin: 3px">
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

export const ContactSection2 = (
  contact: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: ContactSection;
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
    ${
      contact.data.title === ""
        ? ``
        : `<div style="${SectionStyles.blockTitleDiv(formStyles, contact.data.flipped)}">
            <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
              ${contact.data.title}
            </h2>
          </div>`
    }
    <div style="display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: 500;
      font-size: 14px;
      margin-top: ${contact.data.title === "" ? 14 : 0}px;"
    >
      <div style="display: flex; align-items: center; margin: 3px">
        ${getIcon({ name: "address", color: formStyles.accentColor })}
        &nbsp;&nbsp;${contact.data.data.address}
      </div>
      <div style=" display: flex; align-items: center; margin: 3px">
        ${getIcon({ name: "phone", color: formStyles.accentColor })}
        &nbsp;&nbsp;${contact.data.data.phno}
      </div>
      ${contact.data.data.emails
        .map((eachLink) => {
          return /* html */ `
          <div key={eachLink} style="display: flex; align-items: center; margin: 3px">
            ${getIcon({
              name: getUrlDomainName(eachLink),
              color: formStyles.accentColor,
            })}
            &nbsp;&nbsp;${eachLink}
          </div>
        `;
        })
        .join("")}
    </div>
  </div>
  `;
};
