import { Course, Educations } from "../../interfaces/Educations";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const educationsSection1 = (
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
              <div style="display: flex; align-items: center; justify-content: center; margin-right: 2px">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 24 24">
                  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
                </svg>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: center; align-items: start; flex: 1">
                <div style="height: 100%; width: 100%; display: flex; flex-direction: row; justify-content: space-between; align-items: center;">
                  <p style="font-weight: 600; color: #434343; margin: 0px 8px 0px 0px;">${course.organizationName}</p>
                  <!------------------------------------------------------------------------------>
                  <!-- Needed to Use margin-top & margin-bottom because align-items wont center -->
                  <!------------------------------------------------------------------------------>
                  <p style="color: ${formStyles.accentColor}; font-size: 12px; flex-shrink: 0; margin-bottom: auto; padding-top: 2px">${course.courseDuration}</p>
                </div>

                <p style="font-weight: 500; color: #434343; margin: 0px;">${course.courseName}, ${course.courseResults}</p>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  </div>
  `;
};

// <p style="font-weight: 600; color: #434343; margin: 0px;">${course.organizationName}</p>
