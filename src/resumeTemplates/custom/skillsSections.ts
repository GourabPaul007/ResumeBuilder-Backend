import { FormStyles } from "../../interfaces/FormStyles";
import { Skills } from "../../interfaces/Skills";
import { SectionStyles } from "./_SectionStyles";

export const SkillsSection1 = (
  skills: { x: number; y: number; w: number; h: number; data: Skills },
  formStyles: FormStyles
): string => {
  return /*html*/ `<div style="${SectionStyles.sectionWrapper({
    x: skills.x,
    y: skills.y,
    w: skills.w,
    h: skills.h,
    bg: "pink",
  })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles, skills.data.flipped)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${skills.data.title}
        </h2>
      </div>
      <!-- for aligning to left or right -->
      <div style="
        font-weight: 500;
        display: flex;
        flex-flow: wrap;
        flex-direction: ${skills.data.flipped ? "row-reverse" : "row"};
      ">
        ${skills.data.data
          .map((eachSkill: string) => {
            return `<div
              style="
                display: inline-block;
                padding: 4px 8px;
                margin: 4px;
                border: ${skills.data.filled ? "1px solid transparent" : `1px solid ${skills.data.color}`};
                border-radius: ${skills.data.chipRadius}px;
                color: ${skills.data.filled ? "#fff" : skills.data.color};
                background-color: ${skills.data.filled ? skills.data.color : "transparent"};
              ">
                ${eachSkill}
              </div>`;
          })
          .join("")}
      </div>
  </div>`;
};

export const SkillsSection2 = (
  skills: { x: number; y: number; w: number; h: number; data: Skills },
  formStyles: FormStyles
): string => {
  return /*html*/ `<div
    style="${SectionStyles.sectionWrapper({ x: skills.x, y: skills.y, w: skills.w, h: skills.h, bg: "pink" })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles, skills.data.flipped)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${skills.data.title}
        </h2>
      </div>
      <!-- for aligning to left or right -->
      <div style="
        padding-left: 4px; 
        font-weight: 500;
        display: flex;
        flex-flow: wrap;
        flex-direction: ${skills.data.flipped ? "row-reverse" : "row"};
      ">
        ${skills.data.data
          .map((eachSkill: string) => {
            return `<div
              style="
                display: inline-block;
                padding: 4px 8px;
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
