import { checkHyperlink } from "../../Helpers/checkHyperlink";
import { getIcon } from "../../Helpers/Icons";
import { FormStyles } from "../../interfaces/FormStyles";
import { Ratings } from "../../interfaces/Ratings";
import { SectionStyles } from "./_SectionStyles";

function getStarsArray(numberOfRatesInStar: number, type: string, color: string) {
  return `
    <div>
      ${[...Array(numberOfRatesInStar)].map((e, i) => getIcon({ name: type + "fill", color })).join("")}
      ${[...Array(5 - numberOfRatesInStar)].map((e, i) => getIcon({ name: type + "empty", color })).join("")}
    </div>
  `;
}

export const RatingsSection1 = (
  ratings: { x: number; y: number; w: number; h: number; data: Ratings },
  formStyles: FormStyles
) => {
  return /*html*/ `
    <div style="${SectionStyles.sectionWrapper({
      x: ratings.x,
      y: ratings.y,
      w: ratings.w,
      h: ratings.h,
      bg: "blue",
    })}">
    <div style="${SectionStyles.blockTitleDiv(formStyles)}">
      <h2 style="${SectionStyles.blockTitleH2(formStyles)}">
        ${ratings.data.title}
      </h2>
    </div>
    <div style="padding-left: 8; font-size: 15; font-weight: 500;">
      ${ratings.data.data
        .map((eachRating, i) => {
          return /*html*/ `
          <div
            key=${eachRating.ratingSubject + i}
            style="display: flex; justify-content: space-between; align-items: center; margin: 4px 0px;"
          >
            <!-- for aligning with the starts -->
            <div style="margin: 0px 0px 2px 0px;">
              ${eachRating.ratingSubject}
            </div>
            <div>
              ${
                eachRating.rateInPercentage === undefined
                  ? eachRating.rateInPercentage
                  : `
                    <div>
                      ${getStarsArray(
                        Math.round(eachRating.rateInPercentage / 20),
                        ratings.data.icon,
                        formStyles.accentColor
                      )}
                    </div>
                    `
              }
            </div>
          </div>`;
        })
        .join("")}
    </div>
  </div>
  `;
};
