import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { Project } from "../../interfaces/Project";

export const projectsSection1 = (projects: { x: number; y: number; w: number; h: number; data: Project[] }) => {
  return `
    <div
      style="
        position: absolute;
        padding-left: 4px;
        padding-right: 20px;
        background-color: white;
        overflow: hidden;
        left: ${projects.x * 17.5}mm;
        top: ${projects.y * 20 + (projects.y - 1) * 10}px;
        width: ${projects.w * 17.5}mm;
        height: ${projects.h * 20 + (projects.h - 1) * 10}px;
      "
    >

      <div class="block">
        <h2 style="font-weight: 600; margin-bottom: 0px; color: #123456">Projects</h2>
        ${projects.data
          .map((eachProject) => {
            return `
            <!-- Project Name -->
            <h4 style="font-weight: 600; margin-left: 8px; margin-bottom: 8px; margin-top: 12px;">${
              eachProject.projectName
            }</h4>
            <!-- Project Details -->
            <div style="margin-bottom: 4px; margin-left: 16px">
              ${eachProject.projectDetails
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
            </div>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
};
