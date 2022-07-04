import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { AboutWithContact } from "../../interfaces/AboutWithContact";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const AboutWithContactSection1 = (
  aboutWithContact: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: AboutWithContact;
  },
  formStyles: FormStyles
): string => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({
      x: aboutWithContact.x,
      y: aboutWithContact.y,
      w: aboutWithContact.w,
      h: aboutWithContact.h,
      bg: "black",
    })}">
      <h1 style="font-weight: 600; margin-bottom: 0px; display: inline-block">${aboutWithContact.data.name}</h1>
      <p style="display: inline-block">&nbsp;&nbsp;${aboutWithContact.data.profession}</p>
      <div style="display: flex; flex-direction: row">

        <!-- the aboutWithContact extra -->
        <div style="padding-right: 4px; padding-left: 4px; flex: 59%">
          <p>
            ${aboutWithContact.data.about}
          </p>
        </div>
        <div style="flex: 2%"></div>

        <!-- the contact section -->
        <div  style="margin-left: 6px; margin-bottom: 6px; padding-left: 20px; border-left: 3px solid #123456; flex: 39%">
          <div style="display: flex; margin-bottom: 8px">
            <i class="bi bi-geo-alt-fill text-danger"></i>
            <div>
              ${aboutWithContact.data.address
                .map((element) => {
                  return `<div style="margin-left: 8px">${element}</div>`;
                })
                .join("")}
            </div>
          </div>

          <div style="display: flex; margin-bottom: 6px">
            <i class="bi bi-envelope-fill text-primary"></i>
            <!-- emails, for flex reasons -->
            <div style="margin-bottom: 2px; margin-left: 8px">
              ${aboutWithContact.data.emails
                .map((element) => {
                  return `<div style="margin-bottom: 0px">${checkHyperlink(element)}</div>`;
                })
                .join("")}
            </div>
          </div>
          <div>
            <i class="bi bi-telephone-fill text-success"></i>
            <span style="margin-left:8px">${aboutWithContact.data.phno}</span>
          </div>
        </div>
      </div>
    </div>
  `;
};
