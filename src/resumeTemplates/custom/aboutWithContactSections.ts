import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { About } from "../../interfaces/About";

export const aboutWithContactSection1 = (about: {
  x: number;
  y: number;
  w: number;
  h: number;
  data: About;
}): string => {
  return `
    <div
      style="
        position: absolute;
        padding-left: 20px;
        padding-right: 20px;
        background-color: white;
        overflow: hidden;
        left: ${about.x * 17.5}mm;
        top: ${about.y * 20 + (about.y - 1) * 10}px;
        width: ${about.w * 17.5}mm;
        height: ${about.h * 20 + (about.h - 1) * 10}px;
      "
    >
      <h1 style="font-weight: 600; margin-bottom: 0px; padding-top: 4px; display: inline-block">${about.data.name}</h1>
      <p style="display: inline-block">&nbsp;&nbsp;${about.data.profession}</p>
      <div style="display: flex; flex-direction: row">

        <!-- the about extra -->
        <div style="padding-right: 4px; padding-left: 4px; flex: 59%">
          <p>
            ${about.data.about}
          </p>
        </div>
        <div style="flex: 2%"></div>

        <!-- the contact section -->
        <div  style="margin-left: 6px; margin-bottom: 6px; padding-left: 20px; border-left: 3px solid #123456; flex: 39%">
          <div style="display: flex; margin-bottom: 8px">
            <i class="bi bi-geo-alt-fill text-danger"></i>
            <div>
              ${about.data.address
                .map((element) => {
                  return `<div style="margin-left: 8px">${element}</div>`;
                })
                .join("")}
            </div>
          </div>

          <div style="display: flex; margin-bottom: 6px">
            <i class="bi bi-envelope-fill text-primary"></i>
            <!-- emails, for flex reasons -->
            <div style="margin-bottom: 2px; margin-left: 8px">
              ${about.data.emails
                .map((element) => {
                  return `<div style="margin-bottom: 0px">${checkHyperlink(element)}</div>`;
                })
                .join("")}
            </div>
          </div>
          <div>
            <i class="bi bi-telephone-fill text-success"></i>
            <span style="margin-left:8px">${about.data.phno}</span>
          </div>
        </div>
      </div>
    </div>
  `;
};
