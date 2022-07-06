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
      ${projects.data.data
        .map((eachProject) => {
          return /*html*/ `
          <div style="margin: 4px 0px 0px 12px; font-size: 15px">
            <h4 style="font-size: 20px; font-weight: 600; margin: 8px 0px 4px 0px;">${eachProject.projectName}</h4>
            <div style="margin: 0px 0px 4px 16px;">
              ${eachProject.projectDetails
                .map((detail) => {
                  return /*html*/ `
                    <div key=${detail} style="display: flex; flex-direction: row; justify-content: start; align-items: start;">
                      ${checkHyperlink(detail)}
                    </div>`;
                })
                .join("")}
            </div>
          </div>
        `;
        })
        .join("")}
    </div>
  `;
};
