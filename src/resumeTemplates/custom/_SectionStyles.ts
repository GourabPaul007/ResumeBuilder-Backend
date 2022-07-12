import { FormStyles } from "../../interfaces/FormStyles";

export class SectionStyles {
  static sectionWrapper({ x, y, w, h, bg }: { x: number; y: number; w: number; h: number; bg?: string }): string {
    // added +10 to height to cover up the blank spaces between blocks
    return `
      position: absolute;
      padding-left: 28px;
      padding-right: 28px;
      padding-top: 3px;
      background-color: ${bg ? "transparent" : "transparent"};
      overflow: hidden;
      left: ${x * 17.5}mm;
      top: ${y * 10 + (y - 1) * 10}px;
      width: ${w * 17.5}mm;
      height: ${h * 10 + (h - 1) * 10 + 10}px;
    `;
  }

  static blockTitleDiv(formStyles: FormStyles, flipped?: boolean): string {
    return `
    display: flex;
    justify-content: ${flipped ? "flex-end" : "flex-start"};
    border-top: 2px solid ${formStyles.titleUnderline ? "transparent" : "transparent"};
    border-bottom: 2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"};
    background-color: ${formStyles.titleFilled ? formStyles.titleFillColor : "transparent"};
    width: ${formStyles.titleFullWidth ? "100%" : "fit-content"}; 
    margin-bottom: 6px;
    margin-left: ${flipped ? "auto" : "0px"};
    border-radius: ${formStyles.titleFilled ? "5px" : "0px"};
    `;
  }

  static blockTitleH2(formStyles: FormStyles): string {
    return `
      font-weight: 600;
      font-size: 24px;
      display: inline-block;
      padding: 2px 2px;
      margin: 0px;
      color: ${formStyles.titleColor};
    `;
  }
}
