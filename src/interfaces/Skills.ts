import { SingleSectionStyle } from "./_SingleSectionStyle";

export interface Skills {
  color: string;
  chipRadius: number;
  chipSize: number;
  title: string;
  filled: boolean;
  flipped: boolean;
  data: string[];
  style: SingleSectionStyle;
}
