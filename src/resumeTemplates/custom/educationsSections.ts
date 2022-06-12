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
            <div style="display: flex; align-items: center; justify-content: center">
              <i style="font-size: 24px" class="m-0 p-0 bi bi-building"></i>
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
