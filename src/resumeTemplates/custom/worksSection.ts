import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { FormStyles } from "../../interfaces/FormStyles";
import { Work, Works } from "../../interfaces/Work";
import { SectionStyles } from "./_SectionStyles";

export const worksSection1 = (
  works: { x: number; y: number; w: number; h: number; data: Works },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({ x: works.x, y: works.y, w: works.w, h: works.h, bg: "red" })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${works.data.title}
        </h2>
      </div>
      ${works.data.data
        .map((eachWork) => {
          return /*html*/ `
            <!-- Work Name -->
            <h4 style="font-weight: 600; margin-left: 8px; margin-bottom: 8px; margin-top: 12px;">${
              eachWork.workOrganizationName
            }</h4>
            <!-- Work Details -->
            <div style="margin-bottom: 4px; margin-left: 16px">
              ${eachWork.workDetails
                .map((detail) => {
                  return `
                    <div
                      key={detail}
                      style={{
                        display: flex,
                        flex-direction: row,
                        justify-content: start,
                        align-items: "start",
                      }}
                    >
                      &bull;&nbsp;${checkHyperlink(detail)}
                    </div>
                  `;
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
