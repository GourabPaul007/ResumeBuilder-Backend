export interface SingleRating {
  id: string;
  ratingSubject: string;
  rateInPercentage: number;
}

export interface Ratings {
  title: string;
  ratingType: "star" | "percent";
  icon: "star" | "circle" | "square";
  flipped: boolean;
  data: SingleRating[];
}
