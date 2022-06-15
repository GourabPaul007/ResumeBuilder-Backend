import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { Work } from "../../interfaces/Work";

export const worksSection1 = (works: { x: number; y: number; w: number; h: number; data: Work[] }) => {
  return `
    <div
      style="
        position: absolute;
        padding-left: 4px;
        padding-right: 20px;
        background-color: white;
        overflow: hidden;
        left: ${works.x * 21.0}mm;
        top: ${works.y * 20 + (works.y - 1) * 10}px;
        width: ${works.w * 21.0}mm;
        height: ${works.h * 20 + (works.h - 1) * 10}px;
      "
    >

      <div class="block">
        <h2 style="font-weight: 600; margin-bottom: 0px; color: #123456">Work Experience</h2>
        ${works.data
          .map((eachWork) => {
            return `
            <!-- Work Name -->
            <h4 class="subHeaders">${eachWork.workOrganizationName}</h4>
            <!-- Work Details -->
            <div style="margin-bottom: 4px; margin-left: 16px">
              ${eachWork.workDetails
                .map((detail) => {
                  return `<div
                    key={detail}
                    style={{
                      display: flex,
                      flex-direction: row,
                      justify-content: start,
                      align-items: "start",
                    }}
                  >
                    ${checkHyperlink(detail)}
                  </div>`;
                })
                .join("")}
                </div>`;
          })
          .join("")}</div>
      </div>
    </div>
  `;
};
