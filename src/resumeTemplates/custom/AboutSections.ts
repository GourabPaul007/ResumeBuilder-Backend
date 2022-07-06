import { About } from "../../interfaces/About";
import { FormStyles } from "../../interfaces/FormStyles";
import { SectionStyles } from "./_SectionStyles";

export const AboutSection1 = (
  about: {
    x: number;
    y: number;
    w: number;
    h: number;
    data: About;
  },
  formStyles: FormStyles
) => {
  return /*html */ `
  <div style="${SectionStyles.sectionWrapper({
    x: about.x,
    y: about.y,
    w: about.w,
    h: about.h,
    // bg: "black",
  })}">
    <h1 style="font-weight: 600; display: inline-block; padding: 0px; margin: 0px;">${about.data.name}</h1>
    <p style="display: inline-block">&nbsp;&nbsp;${about.data.profession}</p>
    <div style="font-weight: 500; font-size: 15px; margin-top: 0px">
      <!-- the about extra -->
      <div style="padding-right: 4px; padding-left: 4px;">
        <p>${about.data.about}</p>
      </div>
    </div>
  </div>
  `;
};
