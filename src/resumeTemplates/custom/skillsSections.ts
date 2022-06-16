export const skillsSection1 = (skills: { x: number; y: number; w: number; h: number; data: string[] }): string => {
  return `<div
    style="
      position: absolute;
      margin-bottom: 8px;
      padding-left: 20px;
      padding-right: 20px;
      background-color: transparent;
      overflow : hidden;
      left: ${skills.x * 17.5}mm;
      top: ${skills.y * 20 + (skills.y - 1) * 10}px;
      width: ${skills.w * 17.5}mm;
      height: ${skills.h * 20 + (skills.h - 1) * 10}px;
    ">
      <h2 style="font-weight: 600; color: #123456; padding: 0px; margin: 0px">Skills</h2>
      <div style="margin-top: 4px; padding-left: 8px; font-weight: 500;">
        ${skills.data
          .map((eachSkill: string) => {
            return `<div
              style="
                display: inline-block;
                padding: 4px 8px;
                margin: 4px;
                border-radius: 6px;
                color: #fff;
                background-color: #123456;
              ">
                ${eachSkill}
              </div>`;
          })
          .join("")}
      </div>
  </div>`;
};
