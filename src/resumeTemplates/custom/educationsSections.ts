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
      padding: 8px;
      background-color: white;
      overflow: hidden;
      left: ${educations.x * 21.0}mm;
      top: ${educations.y * 10}px;
      width: ${educations.w * 21.0}mm;
      height: ${educations.h * 10}px;
    "
  >
    <h1 style="font-weight: 600; margin-bottom: 8px; color: #123456">Education</h1>
    ${educations.data
      .map((course) => {
        return `
          <div class="d-flex align-items-center justify-content-start mb-0 mt-10">
            <div class="d-flex align-items-center justify-content-center">
              <i class="m-0 p-0 bi bi-building"></i>
            </div>
            <div class="d-flex flex-column align-items-start justify-content-center ms-3">
              <p class="fw-bold text-secondary mb-0">${course.organizationName}</p>
              <p class="text-muted">${course.courseName}, ${course.courseResults}</p>
            </div>
          </div>
        `;
      })
      .join("")}
  </div>
  `;
};
