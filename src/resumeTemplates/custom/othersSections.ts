export const othersSection1 = (others: { x: number; y: number; w: number; h: number; data: string[] }) => {
  return `
    <div
      style="
        position: absolute;
        padding-left: 4px;
        padding-right: 4px;
        background-color: white;
        overflow: hidden;
        left: ${others.x * 17.5}mm;
        top: ${others.y * 20 + (others.y - 1) * 10}px;
        width: ${others.w * 17.5}mm;
        height: ${others.h * 20 + (others.h - 1) * 10}px;
      "
    >
      <h2 style="font-weight: 600; color: #123456">Other Skills & Activities</h2>
      <div style="margin-bottom: 12px">
        <!-- Other Skills and Activities Area -->
        <ul>
          ${others.data
            .map((element) => {
              return `
                <li>
                  <div>
                    ${element}
                  </div>
                </li>
                `;
            })
            .join("")}
        </ul>
      </div>
    </div>
  `;
};
