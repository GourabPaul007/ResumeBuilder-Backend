import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { FormStyles } from "../../interfaces/FormStyles";
import { Project, Projects } from "../../interfaces/Project";
import { SectionStyles } from "./_SectionStyles";

export const ProjectsSection1 = (
  projects: { x: number; y: number; w: number; h: number; data: Projects },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({
      x: projects.x,
      y: projects.y,
      w: projects.w,
      h: projects.h,
      bg: "blue",
    })}" >
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${projects.data.title}
        </h2>
      </div>
      <!--<h2 style="font-weight: 600; margin-bottom: 0px; color: #123456">Projects</h2>-->
      ${projects.data.data
        .map((eachProject) => {
          return /*html*/ `
          <!-- Project Name -->
          <h4 style="font-size: 20px; font-weight: 600; margin: 12px 0px 4px 8px;">${eachProject.projectName}</h4>
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
