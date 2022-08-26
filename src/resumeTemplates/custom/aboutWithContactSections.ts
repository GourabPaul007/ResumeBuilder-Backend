import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { getUrlDomainName } from "../../Helpers/getUrlDomainName";
import { getIcon } from "../../Helpers/Icons";
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
      sectionStyle: {
        bgColor: aboutWithContact.data.style.bgColor,
        textColor: aboutWithContact.data.style.textColor,
      },
    })}">
      <h1 style="font-weight: 600; margin-bottom: 0px; display: inline-block">${aboutWithContact.data.name}</h1>
      <p style="display: inline-block">&nbsp;&nbsp;${aboutWithContact.data.profession}</p>
      <div style="display: flex; flex-direction: row">

        <!-- the aboutWithContact extra -->
        <div style="padding: 0px 4px; flex: 59%">
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

export const AboutWithContactSection2 = (
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
      sectionStyle: {
        bgColor: aboutWithContact.data.style.bgColor,
        textColor: aboutWithContact.data.style.textColor,
      },
    })}">
      <!-- the Header section -->
      <h1 style="font-weight: 600; margin-bottom: 0px; display: inline-block">${aboutWithContact.data.name}</h1>
      <p style="display: inline-block">&nbsp;&nbsp;${aboutWithContact.data.profession}</p>
      <div style="padding: 0px 4px">
        <p>${aboutWithContact.data.about}</p>
      </div>

      <!-- the contact section -->
      <div style="display: flex; justify-content: space-evenly; color: ${formStyles.accentColor};">
        <!-- The Left Links -->
        <div>
          ${aboutWithContact.data.emails
            .map((element) => {
              return /*html*/ `
              <div
                key=${element}
                style="text-decoration: none; margin: 2px; display: flex; align-items: center">
                ${getIcon({
                  name: getUrlDomainName(element),
                  color: formStyles.accentColor,
                })}
                &nbsp;&nbsp;
                ${checkHyperlink(element)}
              </div>`;
            })
            .join("")}
        </div>
        <!-- The Right Links -->
        <div>
          <div style="display: flex; align-items: center; margin: 2px;">
            ${getIcon({ name: "phone", color: formStyles.accentColor })}
            &nbsp;&nbsp;
            ${aboutWithContact.data.phno}
          </div>
          <div style="display: flex; align-items: center;margin: 2px;">
            ${getIcon({ name: "home", color: formStyles.accentColor })}
            &nbsp;&nbsp;
            ${aboutWithContact.data.address
              .map((e, index) => {
                return /*html*/ `<span key=${e + index}>${checkHyperlink(e)}</span>`;
              })
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;
};
