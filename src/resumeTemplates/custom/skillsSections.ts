import { FormStyles } from "../../interfaces/FormStyles";
import { Skills } from "../../interfaces/Skills";
import { SectionStyles } from "./_SectionStyles";

export const skillsSection1 = (
  skills: { x: number; y: number; w: number; h: number; data: Skills },
  formStyles: FormStyles
): string => {
  return /*html*/ `<div
    style="${SectionStyles.sectionWrapper({ x: skills.x, y: skills.y, w: skills.w, h: skills.h, bg: "pink" })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${skills.data.title}
        </h2>
      </div>
      <div style="padding-left: 4px; font-weight: 500;">
        ${skills.data.data
          .map((eachSkill: string) => {
            return `<div
              style="
                display: inline-block;
                padding: 6px 12px;
                margin: 4px;
                border-radius: ${skills.data.chipRadius}px;
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
