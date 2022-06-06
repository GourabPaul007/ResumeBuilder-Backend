export const skillsSection1 = (skills: { x: number; y: number; w: number; h: number; data: string[] }): string => {
  return `<div
    style="
      position: absolute;
      margin-bottom: 8px;
      padding: 4px;
      background-color: white;
      overflow : hidden;
      left: ${skills.x * 21.0}mm;
      top: ${skills.y * 10}px;
      width: ${skills.w * 21.0}mm;
      height: ${skills.h * 10}px;
    "
    >
    <h2 style="font-weight: 600; color: #123456">Skills</h2>
    <div style="margin-top: 8px; padding-left: 8px">
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
          "
        >
        ${eachSkill}
      </div>`;
        })
        .join("")}
    </div>
  </div>`;
};
