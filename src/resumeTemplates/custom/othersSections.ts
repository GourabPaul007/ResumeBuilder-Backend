import { FormStyles } from "../../interfaces/FormStyles";
import { Others } from "../../interfaces/Others";
import { SectionStyles } from "./_SectionStyles";

export const OthersSection1 = (
  others: { x: number; y: number; w: number; h: number; data: Others },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({
      x: others.x,
      y: others.y,
      w: others.w,
      h: others.h,
      sectionStyle: {
        bgColor: others.data.style.bgColor,
        textColor: others.data.style.textColor,
      },
    })}">
      <div style="${SectionStyles.blockTitleDiv(formStyles)}">
        <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
          ${others.data.title}
        </h2>
      </div>
      <!--<h2 style="font-weight: 600; color: #123456">Other Skills & Activities</h2>-->
      <div style="margin-bottom: 12px; padding-left: 8px;">
        <!-- Other Skills and Activities Area -->
        ${others.data.data
          .map((element) => {
            return /* html */ `
              <div style="display: flex; margin-bottom: 8px; font-size: 15px;">
                <div>${String.fromCharCode(others.data.bullet)}&nbsp;&nbsp;</div>
                <div>
                  ${element}
                </div>
              </div>
              `;
          })
          .join("")}
      </div>
    </div>
  `;
};
