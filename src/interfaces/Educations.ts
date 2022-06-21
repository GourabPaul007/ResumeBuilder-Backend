export interface Course {
  courseName: string;
  organizationName: string;
  courseResults: string;
  courseDuration: string;
}

export interface Educations {
  title: string;
  data: Course[];
}
