import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { FormStyles } from "../../interfaces/FormStyles";
import { Project } from "../../interfaces/Project";
import { SectionStyles } from "./_SectionStyles";

export const projectsSection1 = (
  projects: { x: number; y: number; w: number; h: number; data: Project[] },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({ x: projects.x, y: projects.y, w: projects.w, h: projects.h })}" >
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}"">
          Projects
        </h2>
      </div>
      <!--<h2 style="font-weight: 600; margin-bottom: 0px; color: #123456">Projects</h2>-->
      ${projects.data
        .map((eachProject) => {
          return /*html*/ `
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
  `;
};
