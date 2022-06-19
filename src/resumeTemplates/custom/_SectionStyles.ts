import { FormStyles } from "../../interfaces/FormStyles";

export class SectionStyles {
  static sectionWrapper({ x, y, w, h }: { x: number; y: number; w: number; h: number }): string {
    return `
      position: absolute;
      padding-left: 20px;
      padding-right: 20px;
      background-color: transparent;
      overflow: hidden;
      left: ${x * 17.5}mm;
      top: ${y * 20 + (y - 1) * 10}px;
      width: ${w * 17.5}mm;
      height: ${h * 20 + (h - 1) * 10}px;
    `;
  }

  static blockTitleDiv(formStyles: FormStyles): string {
    return `
      border-bottom: 2px solid ${formStyles.titleUnderline ? formStyles.titleColor : "transparent"};
      width: ${formStyles.titleFullWidth ? "100%" : "fit-content"}; 
      margin-bottom: 16px;
    `;
  }

  static blockTitleH2(formStyles: FormStyles): string {
    return `
      font-weight: 600;
      display: inline-block;
      padding: 2px 4px 2px ${formStyles.titleFilled ? 4 : 0}px;
      margin: 0px;
      color: ${formStyles.titleColor};
      background-color: ${formStyles.titleFilled ? formStyles.titleFillColor : "transparent"};
      width: ${formStyles.titleFullWidth ? "100%" : "fit-content"};
    `;
  }
}
