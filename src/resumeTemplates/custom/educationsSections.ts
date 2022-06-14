import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { Course } from "../../interfaces/Course";

export const educationsSection1 = (educations: {
  x: number;
  y: number;
  w: number;
  h: number;
  data: Course[];
}): string => {
  return `
  <div
    style="
      position: absolute;
      margin-bottom: 8px;
      padding-left: 4px;
      padding-right: 4px;
      background-color: white;
      overflow: hidden;
      left: ${educations.x * 21.0}mm;
      top: ${educations.y * 20 + (educations.y - 1) * 10}px;
      width: ${educations.w * 21.0}mm;
      height: ${educations.h * 20 + (educations.h - 1) * 10}px;
    "
  >
    <h1 style="font-weight: 600; margin-bottom: 4px; color: #123456">Education</h1>
    ${educations.data
      .map((course) => {
        return `
          <div style="display: flex; flex-direction: row; justify-content: start; align-items: center; margin-bottom: 8px">
            <div style="display: flex; align-items: center; justify-content: center; margin-right: 2px">
              <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 28 28">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
              </svg>
            </div>
            <div style="display: flex; flex-direction: column; align-items: start; justify-content: center;">
              <p class="fw-bold text-secondary mb-0">${course.organizationName}</p>
              <p class="text-muted mb-0">${course.courseName}, ${course.courseResults}</p>
            </div>
          </div>
        `;
      })
      .join("")}
  </div>
  `;
};
