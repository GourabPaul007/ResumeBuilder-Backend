import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { Project } from "../../interfaces/Project";

export const projectsSection1 = (projects: { x: number; y: number; w: number; h: number; data: Project[] }) => {
  return `
    <div
      style="
        position: absolute;
        padding: 4px;
        background-color: white;
        overflow: hidden;
        left: ${projects.x * 21.0}mm;
        top: ${projects.y * 10}px;
        width: ${projects.w * 21.0}mm;
        height: ${projects.h * 10}px;
      "
    >

      <div class="block">
        <h2 style="font-weight: 600; margin-bottom: 0px; color: #123456">Projects</h2>
        ${projects.data
          .map((eachProject) => {
            return `
            <!-- Project Name -->
            <h4 class="subHeaders">${eachProject.name}</h4>
            <!-- Project Details -->
            <p style="margin-bottom: 4px; margin-left: 16px">${checkHyperlink(eachProject.details)}</p>
          `;
          })
          .join("")}
      </div>
    </div>
  `;
};
