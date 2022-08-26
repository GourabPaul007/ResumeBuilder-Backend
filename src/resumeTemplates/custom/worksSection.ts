import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { FormStyles } from "../../interfaces/FormStyles";
import { Work, Works } from "../../interfaces/Work";
import { SectionStyles } from "./_SectionStyles";

export const WorksSection1 = (
  works: { x: number; y: number; w: number; h: number; data: Works },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({
      x: works.x,
      y: works.y,
      w: works.w,
      h: works.h,
      sectionStyle: {
        bgColor: works.data.style.bgColor,
        textColor: works.data.style.textColor,
      },
    })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${works.data.title}
        </h2>
      </div>
      ${works.data.data
        .map((eachWork) => {
          return /*html*/ `
          <div key={eachWork.id} style="margin: 4px 0px 0px 12px; font-size: 15px">
            <!--Work Name & Duration-->
            <div style="width: 100%; display: flex; justify-content: space-between; align-items: start;">
              <h4 style="font-size: 20px; font-weight: 600; margin: 0px;">${eachWork.workOrganizationName}</h4>
              <p style="color: ${formStyles.accentColor}; font-size: 12px; flex-shrink: 0; padding-top: 3">
                ${eachWork.workDuration}
              </p>
            </div>
            <!-- Work Details -->
            <div style="margin: 0px 0px 4px 16px; font-weight: 500">
              ${eachWork.workDetails
                .map((detail) => {
                  return `
                    <div
                      key=${detail}
                      style="display: flex; flex-direction: row; justify-content: start; align-items: start;"
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
    </div>
  `;
};
