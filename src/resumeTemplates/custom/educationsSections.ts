import { getIcon } from "../../Helpers/Icons";
import { Course, Educations } from "../../interfaces/Educations";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const EducationsSection1 = (
  educations: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: Educations;
  },
  formStyles: FormStyles
): string => {
  // style=${SectionStyles.sectionWrapper(educations.x, educations.y, educations.w, educations.h)
  return /*html*/ `
  <div style="${SectionStyles.sectionWrapper({
    x: educations.x,
    y: educations.y,
    w: educations.w,
    h: educations.h,
    bg: "green",
  })}">
    <div style="${SectionStyles.blockTitleDiv(formStyles)}">
      <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
        ${educations.data.title}
      </h2>
    </div>
    <div style="display: flex; flex-direction: column; justify-content: space-between;">
      ${educations.data.data
        .map((course) => {
          return /*html*/ `
            <div style="display: flex; justify-content: start; align-items: center; margin: 0px 0px 8px 0px;">
              <div style="display: flex; align-items: center; justify-content: center;">
                ${getIcon({ name: "education", color: formStyles.accentColor })}&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: start; flex: 1">
                <div style="height: 100%; width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                  <p style="font-weight: 600; color: #434343; margin: 0px 8px 0px 0px;">${course.organizationName}</p>
                  <!------------------------------------------------------------------------------>
                  <!-- Needed to Use margin-top & margin-bottom because align-items wont center -->
                  <!------------------------------------------------------------------------------>
                  <p style="color: ${
                    formStyles.accentColor
                  }; font-size: 12px; flex-shrink: 0; margin-bottom: auto; padding-top: 2px">${
            course.courseDuration
          }</p>
                </div>

                <p style="font-weight: 500; color: #434343; margin: 0px;">${course.courseName}</p>
                <p style="font-weight: 500; color: #434343; margin: 0px;">${course.courseResults}</p>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  </div>
  `;
};

export const EducationsSection2 = (
  educations: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: Educations;
  },
  formStyles: FormStyles
): string => {
  // style=${SectionStyles.sectionWrapper(educations.x, educations.y, educations.w, educations.h)
  return /*html*/ `
  <div style="${SectionStyles.sectionWrapper({
    x: educations.x,
    y: educations.y,
    w: educations.w,
    h: educations.h,
    bg: "green",
  })}">
    <div style="${SectionStyles.blockTitleDiv(formStyles)}">
      <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
        ${educations.data.title}
      </h2>
    </div>
    <div style="display: flex; justify-content: space-evenly; align-items: flex-start; margin: 16px 4px; width: 100%;">
      ${educations.data.data
        .map((course) => {
          return /*html*/ `
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0px 5px;">
              <div style="font-weight: 600; text-align: center;">${course.organizationName}</div>
              <div style="font-weight: 500; text-align: center;">${course.courseName}, ${course.courseDuration}</div>
              <div style="font-weight: 500; text-align: center;">${course.courseResults}</div>
            </div>
          `;
        })
        .join("")}
    </div>
  </div>
  `;
};
