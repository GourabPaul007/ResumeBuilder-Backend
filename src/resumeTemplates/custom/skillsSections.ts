import { FormStyles } from "../../interfaces/FormStyles";
import { Skills } from "../../interfaces/Skills";
import { SectionStyles } from "./_SectionStyles";

export const skillsSection1 = (
  skills: { x: number; y: number; w: number; h: number; data: Skills },
  formStyles: FormStyles
): string => {
  return /*html*/ `<div
    style="${SectionStyles.sectionWrapper({ x: skills.x, y: skills.y, w: skills.w, h: skills.h })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}"">
          Projects
        </h2>
      </div>
      <div style="margin-top: 4px; padding-left: 8px; font-weight: 500;">
        ${skills.data.data
          .map((eachSkill: string) => {
            return `<div
              style="
                display: inline-block;
                padding: 4px 8px;
                margin: 4px;
                border-radius: ${skills.data.radius}px;
                color: #fff;
                background-color: ${skills.data.color};
              ">
                ${eachSkill}
              </div>`;
          })
          .join("")}
      </div>
  </div>`;
};
